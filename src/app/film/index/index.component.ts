import { Component, OnInit, NgZone, ViewChild, AfterViewChecked } from '@angular/core';
import { ElectronService } from '../../core/services';
import { ExplorerComponent, Entity } from '../../core/explorer/explorer.component';

const decrypt = require("../douban-decode");
const superagent = require("superagent");

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewChecked {
  @ViewChild(ExplorerComponent, { static: true }) explorer: ExplorerComponent;
  folder: string = '/Volumes/青龙/电影';
  operator: 'douban' | 'search' | '' = '';

  doubanSearchName = '';
  doubanSearchResult = null;
  folderSearchName = '';
  folderSearchResult = null;

  constructor(
    private electron: ElectronService,
    private _ngZone: NgZone
  ) {
    this.electron.ipcRenderer.on('select-dir', (event, { canceled, filePaths: [filePath, ...others] }) => {
      console.log(canceled, filePath);
      this._ngZone.run(() => this.folder = filePath);
    });
  }

  ngOnInit(): void { }

  ngAfterViewChecked() {
    // console.log(this.explorer.treeControl, this.explorer.dataSource);
  }

  selectDir() {
    this.electron.ipcRenderer.send('select-dir');
  }

  setDir(folder) {
    if (this.folder === folder) {
      this.explorer.refresh();
    } else {
      this.folder = folder;
    }
  }

  explorerErrorHandler(err) {
    console.log('explorerErrorHandler', err);
  }

  doubanOperate() {
    this.operator = 'douban';
    const { name, fullpath, expandable } = this.explorer.getSelected();
    this.doubanSearchName = (expandable ? name : name.replace(/\.\w+$/, '')).replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\|\[\]\\\:\"\;\'\,\.\/\<\>\?【】]/g, ' ');
  }

  async searchDouban(key: string, input) {
    if (input.selectionStart !== input.selectionEnd) {
      key = key.slice(input.selectionStart, input.selectionEnd);
    }
    try {
      const url = `https://search.douban.com/movie/subject_search?search_text=${encodeURIComponent(
        key
      )}&cat=1002`;
      const res = await superagent.get(url);
      if (/window\.__DATA__\s*=\s*"(.*)"/.test(res.text)) {
        const doubanSearchResult = decrypt(RegExp.$1);
        console.log('douban-search', doubanSearchResult);
        this._ngZone.run(() => this.doubanSearchResult = doubanSearchResult);
      } else {
        console.error('匹配不到 window.__DATA__ ');
      }
    } catch (err) {
      console.error(err);
    }
  }

  searchOperate() {
    this.operator = 'search';
    const node = this.explorer.getSelected();
    this.folderSearchName = node ? node.name : '';
  }

  searchFolder(key: string, input) {
    if (input.selectionStart !== input.selectionEnd) {
      key = key.slice(input.selectionStart, input.selectionEnd);
    }
    this.folderSearchResult = this._searchFolder(key, this.explorer.getData());
  }

  _searchFolder(key, data) {
    const result = [];
    data.forEach(node => {
      if (node.name.indexOf(key) > -1) {
        result.push(node);
      }
      result.push(...this._searchFolder(key, node.children));
    });
    return result;
  }

  openItem(node) {
    this.electron.shell.openItem(node.fullpath);
  }

  openItemFolder(node) {
    this.electron.shell.openItem(this.electron.path.dirname(node.fullpath));
  }

  genName(item) {
    return `${item.title} ; ${item.rating.value} ; ${item.abstract.split(' / ').join(' ; ')} ; ${item.abstract_2.split(' / ').join(' ; ')}`.replace(/\//g, '');
  }

  async nameing(item) {
    const node = this.explorer.getSelected();
    const { name, fullpath, expandable } = this.explorer.getSelected();
    const { fs: { promises }, path } = this.electron;
    const refreshPath = path.resolve(fullpath, '../');
    const targetFolder = path.resolve(refreshPath, this.genName(item));
    // 重命名文件夹
    if (expandable) {
      await promises.rename(fullpath, targetFolder);
    } else { // 新建文件夹,并移动文件至其中
      await promises.mkdir(targetFolder, { recursive: true });
      await promises.rename(fullpath, path.join(targetFolder, name));
    }
    this.explorer.refresh();
  }
}
