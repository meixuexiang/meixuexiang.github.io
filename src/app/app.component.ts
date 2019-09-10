import { Component } from '@angular/core';
import { ElectronService } from './core/services';
// import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    public es: ElectronService,
    // private translate: TranslateService
  ) {
    // translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (es.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', es.ipcRenderer);
      console.log('NodeJS childProcess', es.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
