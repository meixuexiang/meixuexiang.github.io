import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { ElectronService } from '../providers/electron.service';
import * as Fuse from 'fuse.js';

export const routes: Routes = [
  {
    path: 'regexp',
    loadChildren: './regexp/regexp.module#RegexpModule',
    data: {
      name: '正则编辑器',
      version: '2.0',
      email: 'wy_hd@163.com',
      desc: '用于练习编写正则表达式，以及使用正则进行文本/文件处理',
      keywords: 'text file exec test match replace',
      className: 'fa fa-drivers-license-o',
      width: 1024,
      height: 768
    }
  },
  // {
  //   path: 'hostseditor',
  //   loadChildren: '@valley/hostseditor#HostseditorModule',
  //   data: {
  //     name: 'Hosts编辑器',
  //     version: '4.0',
  //     email: 'wy_hd@163.com',
  //     desc: '用于方便的修改hosts文件',
  //     keywords: 'switch hosts environment',
  //     className: 'fa fa-file-o',
  //     width: 1024,
  //     height: 768
  //   }
  // },
  // {
  //   path: 'json',
  //   loadChildren: '@valley/json#JsonModule',
  //   data: {
  //     name: 'JSON',
  //     version: '1.0',
  //     email: 'wy_hd@163.com',
  //     desc: 'JSON查看编辑工具',
  //     keywords: 'viewer editor',
  //     className: 'fa fa-yelp',
  //     width: 1024,
  //     height: 768
  //   }
  // },
  // {
  //   path: 'payslip',
  //   loadChildren: '@valley/payslip#PayslipModule',
  //   data: {
  //     name: '群发工资条',
  //     version: '1.0',
  //     email: 'wy_hd@163.com',
  //     desc: '企业工资条群发工具',
  //     keywords: 'qi ye gong zi tiao qun fa',
  //     className: 'fa fa-envelope-o',
  //     width: 1024,
  //     height: 768
  //   }
  // },
  // {
  //   path: 'sxwnl',
  //   loadChildren: '@valley/sxwnl#SxwnlModule',
  //   data: {
  //     name: '寿星万年历',
  //     version: '1.0',
  //     email: 'wy_hd@163.com',
  //     desc: '寿星万年历',
  //     keywords: 'shou xing wan nian li calendar nong li gong li',
  //     className: 'fa fa-calendar',
  //     width: 1024,
  //     height: 768
  //   }
  // },
  // {
  //   path: 'uglify',
  //   loadChildren: '@valley/uglify#UglifyModule',
  //   data: {
  //     name: 'UglifyJs',
  //     version: '1.0',
  //     email: 'wy_hd@163.com',
  //     desc: 'UglifyJs',
  //     keywords:
  //       'UglifyJs ast lisperator Parser Code generator Compressor Mangler Scope analysis walker transformer ya shuo dai ma',
  //     className: 'fa fa-calendar',
  //     width: 1024,
  //     height: 768
  //   }
  // },
  // {
  //   path: 'timestamp',
  //   loadChildren: '@valley/timestamp#TimestampModule',
  //   data: {
  //     name: '时间戳',
  //     version: '1.0',
  //     email: 'wy_hd@163.com',
  //     desc: '时间戳',
  //     keywords: 'time date shi jian chuo',
  //     className: 'fa fa-calendar',
  //     width: 1024,
  //     height: 768
  //   }
  // }
];

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss']
})
export class LaunchpadComponent implements OnInit {
  keyword = '';
  fuse = new Fuse(routes, {
    keys: ['path', 'data']
  });
  get routes(): Routes {
    const keyword = this.keyword.trim().toLowerCase();
    return keyword ? this.fuse.search(keyword) : routes;
  }

  constructor(private es: ElectronService) { }

  ngOnInit() { }

  openURL(event: any, url: string, width: number = 800, height: number = 600) {
    console.log(event);
    event.stopPropagation();
    const BrowserWindow = this.es.remote.BrowserWindow;

    let win = new BrowserWindow({ width, height });
    win.on('close', function () {
      win = null;
    });
    const targetURL = `${location.origin}/#/${url}`;
    win.loadURL(targetURL);
    console.log(`Opening: `, targetURL);
    win.show();
  }

}
