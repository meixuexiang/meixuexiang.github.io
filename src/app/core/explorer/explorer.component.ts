import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewChecked } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTree } from '@angular/material/tree';
import { ElectronService } from '../services';

export class Entity {
  children: Entity[] = [];
  constructor(
    public name: string,
    public fullpath: string,
    public expandable = false,
    public parent = null
  ) { }
}

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit, AfterViewChecked {
  @ViewChild(MatTree, { static: true }) tree: MatTree<Entity>;
  _folder = '';
  @Input()
  set folder(value) {
    if (value) {
      this.selected = null;
      this._folder = this.electron.path.normalize(value);
      this.root = new Entity('', this._folder, true);
      this.refresh()
    }
  }
  @Output() error = new EventEmitter<string>();

  treeControl = new NestedTreeControl<Entity>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Entity>();

  root: Entity = null;
  selected: Entity = null;

  constructor(
    private electron: ElectronService,
  ) { }

  ngOnInit(): void { }

  ngAfterViewChecked() { }

  refresh() {
    this.getTreeNodes(this.root).then(({ data, expansionNodes }) => {
      this.treeControl.expansionModel.clear();
      this.dataSource.data = data;
      // console.log('expansionNodes', expansionNodes);
      expansionNodes.forEach(node => {
        this.treeControl.expand(node);
      });
    }, reason => console.error("Error: getTreeNodes: ", reason))
  }

  getSelected() {
    return this.selected;
  }

  getRootFolder() {
    return this._folder;
  }

  getRootNode() {
    return this._folder;
  }

  getData() {
    return this.dataSource.data;
  }

  nodeSelectHandler(node: Entity) {
    this.selected = node;
  }

  hasChild(_: number, node: Entity) {
    return node.expandable;
  }

  async getTreeNodes(node: Entity): Promise<{ data: Entity[], expansionNodes }> {
    const { fs, path } = this.electron;
    const dirents = await fs.promises.readdir(node.fullpath, { withFileTypes: true });
    const exNodes = [];
    const nodes = await Promise.all(dirents.filter(dirent => dirent.isDirectory() || !dirent.name.startsWith('.')).map(async (dirent) => {
      const subNode = new Entity(dirent.name, path.join(node.fullpath, dirent.name), dirent.isDirectory(), node);
      if (this.treeControl.expansionModel.selected.find(m => m.fullpath === subNode.fullpath)) {
        exNodes.push(subNode);
      }
      if (this.selected && this.selected.fullpath === subNode.fullpath) {
        this.selected = subNode;
      }
      if (dirent.isDirectory()) {
        const { data, expansionNodes } = await this.getTreeNodes(subNode);
        exNodes.push(...expansionNodes);
        subNode.children = data;
      }
      return subNode;
    }));
    return { data: this.sort(nodes), expansionNodes: exNodes };
  }

  sort(nodes: Entity[]) {
    return [].concat(...nodes.reduce((r, v) => {
      r[+!v.expandable].push(v);
      return r;
    }, [[], []]).map(ar => {
      ar.sort((a, b) => a.name > b.name ? 1 : -1)
      return ar;
    }));
  }
}
