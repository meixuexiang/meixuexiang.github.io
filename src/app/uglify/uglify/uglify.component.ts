import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { ItemBase, ConfigService } from '../config.service';
import { ElectronService } from '../../core/services/electron/electron.service';
// import * as UglifyJS from 'uglify-js/tools/node';
// const UglifyJS = require('uglify-js/tools/node');

@Component({
  selector: 'app-uglify',
  templateUrl: './uglify.component.html',
  styleUrls: ['./uglify.component.scss'],
  providers: [MessageService, ElectronService]
})
export class UglifyComponent implements OnInit {
  files: any[] = [];
  source: string;
  output: string;

  ast: any;
  arScopeAnalyzerRslt: { msg: string; pos: { file: string; line: number; col: number } }[];

  msgs: Message[] = [];

  form: FormGroup;
  items: ItemBase<boolean | string | number | {}>[];

  visible = false;
  UglifyJS: any;

  constructor(
    private messageService: MessageService,
    private configService: ConfigService,
    private es: ElectronService
  ) {
    this.source = `var cc = 20;
function K_show(f) {
  pan_1.style.display = 'none';
  if (f == 1) pan_1.style.display = 'block';
  out.innerHTML = '';
}

function dingSuo_v() { //定朔计算速度测试
  var useless;
  d1 = new Date();
  for (i = 0; i < 1000; i++) XL.MS_aLon_t(0);
  var d2 = new Date();
  for (i = 0; i < 1000; i++) XL.MS_aLon_t2(0);
  var d3 = new Date();
  out.innerHTML = "高精度:" + (d2 - d1) + "毫秒/千个<br>" + "低精度:" + (d3 - d2) + "毫秒/千个<br>";
  out.innerHTML = '<font color=red>' + out.innerHTML + '</font>';
}`;
    this.items = this.configService.getDefaultItems();
    this.form = this.configService.buildForm(this.items);
    console.log(this.items, this.form);
    this.UglifyJS = this.es.require('uglify-js');
    console.log(this.UglifyJS);

  }

  ngOnInit() { }

  onSelect(event) {
    console.log(event);
    for (const file of event.files) {
      console.log(file);
      this.files.push(file);
      this.es.util
        .promisify(this.es.require('fs').readFile)(file.path, 'utf-8')
        .then(content => {
          file.content = content;
        })
        .catch(err => {
          file.content = JSON.stringify(err);
        });
    }
  }

  onRemove() { }
  onClear() { }

  parse() {
    this._parse();
    console.log(this.ast);
    if (this.es.isElectron) {
      this.es.remote.getCurrentWebContents().openDevTools();
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Parse success',
        detail: `View detail by open dev tools`
      });
    }
  }

  _parse() {
    try {
      this.ast = this.UglifyJS.parse(this.source);
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: error.message,
        detail: `line: ${error.line} col: ${error.col}`
      });
      throw error;
    }
  }

  scopeAnalyzer() {
    this._parse();
    this.ast.figure_out_scope();
    console.log(this.ast);
    const [walker, arScopeAnalyzerRslt] = this.scopeWalker();
    this.ast.walk(walker);
    this.arScopeAnalyzerRslt = arScopeAnalyzerRslt;
  }

  minifyOptions() {
    this.visible = !this.visible;
  }

  getOptions(items: ItemBase<boolean | string | number | {}>[], value: any) {
    return items.reduce((o, item) => {
      // if(item['childItems'] ) debugger;
      o[item.key] =
        item['childItems'] && (value.hasOwnProperty(item.key) ? value[item.key] : item.value) === true
          ? this.getOptions(item['childItems'], value[item.key + 'Options'])
          : item.hasOwnProperty('type') ? item['getValue'](value[item.key]) : value[item.key];
      return o;
    }, {});
  }

  minify() {
    this._parse();
    this.ast.figure_out_scope();
    console.log(this.form.value);
    const options = this.getOptions(this.items, this.form.value);
    console.log(options);
    try {
      const minifyResult = this.UglifyJS.minify(this.ast, options);
      console.log(minifyResult);
      this.output = minifyResult.code;
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: error.message,
        detail: `line: ${error.line} col: ${error.col}`
      });
      throw error;
    }
  }
  scopeWalker() {
    const _this = this;
    const n = {
      undeclared: !1,
      unreferenced: !0,
      assign_to_global: !0,
      func_arguments: !0,
      nested_defuns: !0,
      eval: !0
    };
    const arRslt = [];
    const walker = new _this.UglifyJS.TreeWalker(function (t) {
      if (n.undeclared && t instanceof _this.UglifyJS.AST_SymbolRef && t.thedef.undeclared) {
        arRslt.unshift({ msg: `Undeclared symbol: ${t.name}`, pos: t.start });
      }
      if (n.assign_to_global) {
        let r = null;
        if (t instanceof _this.UglifyJS.AST_Assign && t.left instanceof _this.UglifyJS.AST_SymbolRef) {
          r = t.left;
        } else if (t instanceof _this.UglifyJS.AST_ForIn && t.init instanceof _this.UglifyJS.AST_SymbolRef) {
          r = t.init;
        }
        if (r && (r.thedef.undeclared || (r.thedef.global && r.scope !== r.thedef.scope))) {
          arRslt.unshift({
            msg: `${r.thedef.undeclared ? 'Accidental global?' : 'Assignment to global'}: ${r.name}`,
            pos: r.start
          });
        }
      }
      if (n.eval && t instanceof _this.UglifyJS.AST_SymbolRef && t.thedef.undeclared && 'eval' === t.name) {
        arRslt.unshift({ msg: `Eval is used`, pos: t.start });
      }

      if (
        n.unreferenced &&
        (t instanceof _this.UglifyJS.AST_SymbolDeclaration || t instanceof _this.UglifyJS.AST_Label) &&
        !(t instanceof _this.UglifyJS.AST_SymbolCatch) &&
        (0 === t.definition().references.length && !(t.scope.uses_eval || t.scope.uses_with))
      ) {
        const label = t instanceof _this.UglifyJS.AST_Label ? 'Label' : 'Symbol';
        arRslt.unshift({ msg: `${label} ${t.name} is declared but not referenced`, pos: t.start });
      }

      if (n.func_arguments && t instanceof _this.UglifyJS.AST_Lambda && t.uses_arguments) {
        arRslt.unshift({ msg: `arguments used in function ${t.name ? t.name.name : 'anonymous'}`, pos: t.start });
      }
      if (n.nested_defuns && t instanceof _this.UglifyJS.AST_Defun && !(walker.parent() instanceof _this.UglifyJS.AST_Scope)) {
        arRslt.unshift({
          msg: `Function ${t.name.name} declared in nested statement "${walker.parent().TYPE}"`,
          pos: t.start
        });
      }
    });
    return [walker, arRslt];
  }

}
