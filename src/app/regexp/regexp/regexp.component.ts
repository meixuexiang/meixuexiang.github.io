import { Component, OnInit } from '@angular/core';
import { SelectItem, Message } from 'primeng/components/common/api.d';
import { MessageService } from 'primeng/components/common/messageservice';
import { ElectronService } from '../../core/services/electron/electron.service';

@Component({
  selector: 'app-regexp',
  templateUrl: './regexp.component.html',
  styleUrls: ['./regexp.component.scss'],
  providers: [MessageService]
})
export class RegexpComponent implements OnInit {
  flagOptions: SelectItem[] = [{ label: 'G', value: 'g' }, { label: 'I', value: 'i' }, { label: 'M', value: 'm' }];
  replacementTypeOptions: SelectItem[] = [{ label: 'String', value: 's' }, { label: 'Function', value: 'f' }];
  fnTemplate = `function ($0${this.genParamsFromReg()}){\r\n  //console.log(this);\r\n  //code here\r\n  \r\n  return $0;\r\n}`;

  action: string;
  matchNumbers: number;

  source: string;
  output: any;

  flags: string[];
  pattern: string;
  regexp: RegExp;
  regexpError: Error;

  replacementType: string;
  replacementString: string;
  replacementFunc: string;
  repFunc: any;
  repFuncError: Error;

  msgs: Message[] = [];

  constructor(private messageService: MessageService, public es: ElectronService) {
    this.reset();
  }

  ngOnInit() {
    // this.source = this.reset.toString();
  }

  reset() {
    this.action = 'exec';
    this.matchNumbers = null;
    this.source = '';
    this.output = '';
    this.flags = ['g', 'i', 'm'];
    this.pattern = '';
    this.replacementType = 's';
    this.replacementString = '';
    this.replacementFunc = this.fnTemplate;
    this.repFunc = null;
    this.repFuncError = null;

    this.buildRegExp();
  }

  buildRegExp() {
    this.regexp = this.regexpError = null;
    try {
      if (!this.pattern) {
        throw new Error('');
      }
      this.regexp = new RegExp(this.pattern, this.flags.join(''));
    } catch (ex) {
      this.regexpError = ex;
    }
  }

  onInput(type: string) {
    if (type === 'source') {
    } else if (type === 'flags' || type === 'pattern') {
      this.buildRegExp();
      if (this.regexp && this.replacementType === 'f') {
        this.attempInjectArgs();
      }
    } else if (type === 'replacementType') {
      this.action = 'replace';
      if (this.replacementType === 'f') {
        this.attempInjectArgs();
        this.buildRepFunc();
      }
    } else if (type === 'replacementString') {
      this.action = 'replace';
    } else if (type === 'replacementFunc') {
      this.action = 'replace';
      this.buildRepFunc();
    }

    if (this.regexpError) {
      if (this.pattern) {
        return (this.output = this.regexpError);
      }
      return;
    }

    if (this.repFuncError) {
      return (this.output = this.repFuncError);
    }

    this.output = this[this.action]();
  }

  buildRepFunc() {
    this.repFunc = this.regexpError = null;
    try {
      // tslint:disable-next-line:no-eval
      this.repFunc = eval('(' + this.replacementFunc + ')');
    } catch (ex) {
      this.regexpError = ex;
    }
  }

  attempInjectArgs() {
    const r = /^\s*function\s*\([^)]*\)/;
    this.replacementFunc = this.replacementFunc.replace(r, `function ($$0${this.genParamsFromReg()})`);
  }

  genParamsFromReg() {
    const source = this.regexp ? this.regexp.source : '';
    const leftBrace = source.match(/\((?!\?)/g) || [];
    return leftBrace
      .slice(0, 9)
      .map((_, i) => `, $${i + 1}`)
      .join('');
  }

  exec() {
    const output = [];
    let m = this.regexp.exec(this.source),
      lastIndex;
    if (m) {
      lastIndex = m.index;
      output.push(JSON.stringify([].concat(m, [m.index])));
      if (this.flags.includes('g')) {
        while ((m = this.regexp.exec(this.source)) !== null) {
          if (m.index === lastIndex) {
            output.length = 0;
            break;
          }
          output.push(JSON.stringify([].concat(m, [m.index])));
        }
      }
    }
    this.matchNumbers = output.length;
    return output.join('\r\n');
  }

  match() {
    const output = this.source.match(this.regexp) || [];
    this.matchNumbers = output.length;
    return output.join('\r\n');
  }

  replace() {
    if (this.replacementType === 's') {
      return this.source.replace(this.regexp, this.replacementString);
    }
    try {
      return this.source.replace(this.regexp, this.repFunc.bind(this));
    } catch (error) {
      return error;
    }
  }

  copyL2R() {
    this.source = this.output;
    this.messageService.add({ severity: 'success', detail: 'Copied!' });
  }
}
