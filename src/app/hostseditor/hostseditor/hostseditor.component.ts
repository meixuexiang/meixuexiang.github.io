import { Component, OnInit } from '@angular/core';
import { Address4, Address6 } from 'ip-address';
import { ElectronService } from '../../core/services/electron/electron.service';
import { HostsService } from '../hosts.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
interface Env {
  name: string;
  isActived: boolean;
}

interface Rule {
  id: number;
  isActived: boolean;
  address: Address4 | Address6;
  domain: string;
  envName?: string;
  isAddrAlive?: boolean;
  isRuleValid?: boolean;
  isAddrAliveChecking?: boolean;
  isRuleValidChecking?: boolean;
}

@Component({
  selector: 'app-hostseditor',
  templateUrl: './hostseditor.component.html',
  styleUrls: ['./hostseditor.component.scss'],
  providers: [HostsService]
})
export class HostseditorComponent implements OnInit {
  rules: Rule[] = [];
  envs: Env[] = [];
  _id = 1000;
  hostsText: string;
  _hostsText: string;
  textMode = false;

  dns: any;
  child_process: any;
  snackBarOption: MatSnackBarConfig = { duration: 1800, horizontalPosition: 'end', verticalPosition: 'top' };
  isHelpOverlayOpen = false;
  overlayPosition = [{ originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' }];

  constructor(
    private hosts: HostsService,
    private es: ElectronService,
    private snackBar: MatSnackBar
  ) {
    this.dns = es.remote.require('dns');
    this.child_process = es.remote.require('child_process');
  }

  ngOnInit() {
    this.reload(true);
  }

  async reload(isInit: boolean = false) {
    const [err, text] = await this.hosts.read();
    if (err) {
      return this.snackBar.open(err.message, '', this.snackBarOption);
    }
    if (this.textMode) {
      this.hostsText = text;
    } else {
      this.rules = this.parseText(<string>text);
      this.envs = this.genEnvs();
      this.lookupAll(this.rules);
      this.pingAll();
    }
    if (!isInit) {
      this.snackBar.open('刷新成功', '', this.snackBarOption);
    }
  }

  parseText(text: string): Rule[] {
    const rules = text.split('\n').map(s => {
      s = s.trim();
      const isActived = !s.startsWith('#');
      return this.parseLine(isActived ? s : s.replace(/^#[#\s]*/, ''), isActived);
    });

    return [].concat(...rules).sort((a, b) => (a.envName > b.envName ? 1 : a.envName === b.envName ? 0 : -1));
  }

  parseLine(str: string, isActived: boolean): Rule[] {
    const sharpIndex = str.indexOf('#');
    let envName = '';
    if (sharpIndex > -1) {
      envName = str.slice(sharpIndex).replace(/^#[#\s]*/, '');
      str = str.slice(0, sharpIndex).trim();
    }

    const ar = str.split(/\s+/);
    if (ar.length < 2) {
      return [];
    }

    const ip = ar.shift(),
      address = this.getAddress(ip);
    if (!address) {
      return [];
    }
    address.correct = address.correctForm();
    return ar.map(domain => ({ id: this.uuid(), isActived, address, domain, envName }));
  }

  genEnvs(): Env[] {
    const nameSet = this.rules.reduce((set, rule) => {
      if (rule.envName) {
        set.add(rule.envName);
      }
      return set;
    }, new Set([]));
    return Array.from(nameSet).map(name => ({
      name,
      isActived: this.rules.filter(r => r.envName === name).every(r => r.isActived)
    }));
  }

  lookup(domain: string) {
    return new Promise((resolve, reject) => {
      this.dns.lookup(domain, { all: true }, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    // return this.es.util.promisify(this.dns.lookup)(domain, { all: true });
  }

  lookupAll(rules: Rule[]) {
    const domainPromiseMap = {};
    rules.forEach(rule => {
      if (!rule.isActived) {
        return;
      }

      rule.isRuleValidChecking = true;

      if (!domainPromiseMap[rule.domain]) {
        domainPromiseMap[rule.domain] = this.lookup(rule.domain);
      }
      domainPromiseMap[rule.domain]
        .then(ar => {
          console.log(rule, ...ar);
          rule.isRuleValid = !!ar.find(o => o.address === rule.address.correctForm());
          rule.isRuleValidChecking = false;
        })
        .catch(err => {
          console.log(err);
          rule.isRuleValid = false;
          rule.isRuleValidChecking = false;
        });
    });
  }

  getPingCmd(rule: Rule): string {
    if (process.platform === 'win32') {
      if (rule.address.v4) {
        return `ping -n 3 ${rule.address.correct}`;
      } else {
      }
    } else {
      return rule.address.v4 ? `ping -c 3 ${rule.address.correct}` : `ping6 -c 3 ${rule.address.correct}`;
    }
  }

  ping(cmd: string) {
    return new Promise((resolve, reject) => {
      this.child_process.exec(cmd, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    // return this.es.util.promisify(this.child_process.exec)(cmd);
  }

  pingAll() {
    const cmdPromiseMap = {};
    this.rules.forEach(rule => {
      const cmd = this.getPingCmd(rule);
      if (!cmd) {
        return;
      }

      rule.isAddrAliveChecking = true;
      if (!cmdPromiseMap[cmd]) {
        cmdPromiseMap[cmd] = this.ping(cmd);
      }
      cmdPromiseMap[cmd]
        .then(result => {
          rule.isAddrAlive = true;
          rule.isAddrAliveChecking = false;
          console.log('ping then: ', rule, result);
        })
        .catch((...args) => {
          rule.isAddrAliveChecking = false;
          console.log('ping catch: ', rule, ...args);
        });
    });
  }

  getAddress(strIP: string): Address4 | Address6 {
    let addr = new Address4(strIP);
    if (addr.valid) {
      return addr;
    }
    addr = new Address6(strIP);
    if (addr.valid) {
      return addr;
    }
    return null;
  }

  async saveHostsText() {
    if (this.hostsText === this._hostsText) {
      return this.switchTextMode();
    }
    const [err] = await this.hosts.write(this.hostsText);
    if (err) {
      return this.snackBar.open(err.message, '', this.snackBarOption);
    }
    this.switchTextMode();
    this.reload();
  }

  async switchTextMode() {
    const [err, text] = await this.hosts.read();
    if (err) {
      return this.snackBar.open(err.message, '', this.snackBarOption);
    }
    const hostsText = this._hostsText = this.hostsText = text;
    this.textMode = !this.textMode;
  }

  uuid() {
    return this._id++;
  }

  serialization(rules: Rule[]) {
    const maxLength = [0, 1, 1, 0],
      lineSpliter = '\n';
    return (
      rules
        .reduce((result, rule, i, array) => {
          if (i && array[i - 1].envName !== rule.envName) {
            result.push('');
          }
          maxLength[1] = Math.max(maxLength[1], rule.address.correct.length);
          maxLength[2] = Math.max(maxLength[2], rule.domain.length);
          result.push(
            [rule.isActived ? '  ' : '# ', rule.address.correct, rule.domain, rule.envName ? '#' + rule.envName : '']
          );
          return result;
        }, [])
        .map(rule => {
          if (rule === '') {
            return rule;
          }
          rule[1] = rule[1].padEnd(maxLength[1] + 2, ' ');
          rule[2] = rule[2].padEnd(maxLength[2] + 2, ' ');
          return rule.join('');
        })
        .join(lineSpliter) + lineSpliter
    );
  }

  async save() {
    const [err] = await this.hosts.write(this.serialization(this.rules));
    if (err) {
      this.snackBar.open(err.message, '', this.snackBarOption);
      return false;
    }
    this.snackBar.open('修改成功', '', this.snackBarOption);
    return true;
  }

  async toggleRuleActive(rule: Rule) {
    rule.isActived = !rule.isActived;
    this.envs = this.genEnvs();
    const result = await this.save();

    if (result) {
      if (rule.isActived) {
        this.lookupAll([rule]);
      }
    } else {
      rule.isActived = !rule.isActived;
      this.envs = this.genEnvs();
    }
  }

  async envChange(env: Env, event) {
    const changedRules = this.rules.filter(r => r.envName === env.name);
    env.isActived = !env.isActived;
    changedRules.forEach(rule => (rule.isActived = env.isActived));
    const result = await this.save();

    if (result) {
      this.lookupAll(changedRules);
    } else {
      env.isActived = !env.isActived;
      changedRules.forEach(rule => (rule.isActived = env.isActived));
    }
  }

  closeHelpOverlay() {
    this.isHelpOverlayOpen = false;
  }
}
