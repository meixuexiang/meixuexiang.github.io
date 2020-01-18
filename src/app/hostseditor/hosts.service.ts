import { Injectable } from '@angular/core';
import { ElectronService } from '../core/services/electron/electron.service';

// import sudo from 'sudo-prompt';
const sudo = require('sudo-prompt');
const options = {
  name: 'valley',
};

@Injectable()
export class HostsService {
  hostsPath: string;
  charset = 'utf-8';

  fs: any;

  constructor(private es: ElectronService) {
    this.hostsPath = this.sysHostsPath();
    this.fs = this.es.remote.require('fs');
  }

  sysHostsPath() {
    const path = this.es.require('path');
    if (process.platform === 'win32') {
      return path.join(process.env.SYSTEMROOT, './system32/drivers/etc/hosts');
    }
    return '/private/etc/hosts';
  }

  read(): Promise<[Error | null, string]> {
    return new Promise((resolve, reject) => {
      this.fs.readFile(this.hostsPath, this.charset, (err, data) => resolve([err, data]));
    });
  }

  write(hostsText: string): Promise<[Error | null]> {
    return new Promise((resolve, reject) => {
      const cmd = `echo -e '${hostsText}' > /private/etc/hosts`;
      sudo.exec(cmd, options, function (err, stdout, stderr) {
        // if (err) throw err;
        resolve([err])
      });
    });
  }
}
