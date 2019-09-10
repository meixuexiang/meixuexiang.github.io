import { Injectable } from '@angular/core';
import { ElectronService } from '../core/services/electron/electron.service';


@Injectable()
export class HostsService {
  hostsPath: string;
  charset = 'utf-8';

  fs: any;
  readFile: any;
  writeFile: any;

  constructor(private es: ElectronService) {
    this.hostsPath = this.sysHostsPath();
    this.fs = this.es.remote.require('fs');
  }

  sysHostsPath() {
    const path = this.es.require('path');
    if (process.platform === 'win32') {
      return path.join(process.env.SYSTEMROOT, './system32/drivers/etc/hosts');
    }
    return '/etc/hosts';
  }

  read(): Promise<[Error | null, string]> {
    return new Promise((resolve, reject) => {
      this.fs.readFile(this.hostsPath, this.charset, (err, data) => resolve([err, data]));
    });
  }

  write(hostsText: string): Promise<[Error | null]> {
    return new Promise((resolve, reject) => {
      this.fs.writeFile(this.hostsPath, hostsText, this.charset, (err) => resolve([err]));
    });
  }
}
