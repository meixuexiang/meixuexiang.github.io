import { Injectable, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class ConfigService {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.buildForm(this.getDefaultItems());
  }

  buildForm(items: ItemBase<boolean | string | number | {}>[]) {
    return this.fb.group(this.toJson(items));
  }

  toJson(items: ItemBase<boolean | string | number | {}>[]) {
    return items.reduce((o, item, index) => {
      const value = item.hasOwnProperty('disabled')
          ? { value: item.value, disabled: item['disabled'] === true }
          : item.value,
        option = {};
      const args = [value, option];
      if (item['isValid']) {
        option['validators'] = item['isValid'].bind(item);
      }
      if (item.ctrlType === 'text' || item.ctrlType === 'jsonstring') {
        option['updateOn'] = 'blur';
      }
      o[item.key] = new FormControl(...args);
      if (item['childItems']) {
        o[item.key + 'Options'] = this.buildForm(item['childItems']);
      }
      return o;
    }, {});
  }

  getDefaultItems(): ItemBase<boolean | string | number | {}>[] {
    const Items: ItemBase<boolean | string | number | {}>[] = [
      new BooleanItem({
        key: 'warnings',
        value: false,
        title:
          'pass true to return compressor warnings in result.warnings. Use the value "verbose" for more detailed warnings.'
      }),
      new JsonBoolItem({
        key: 'parse',
        value: true,
        title: 'pass an object if you wish to specify some additional parse options',
        disabled: true,
        childItems: [
          new BooleanItem({ key: 'bare_returns', value: false, title: 'support top level return statements' }),
          new BooleanItem({ key: 'html5_comments', value: true, title: '' }),
          new BooleanItem({ key: 'shebang', value: true, title: 'support #!command as the first line' })
        ]
      }),
      new JsonBoolItem({
        key: 'compress',
        value: true,
        title: 'Compress options',
        childItems: [
          new BooleanItem({
            key: 'booleans',
            value: true,
            title: 'various optimizations for boolean context, for example !!a ? b : c → a ? b : c'
          }),
          new BooleanItem({
            key: 'collapse_vars',
            value: true,
            title: 'Collapse single-use non-constant variables, side effects permitting.'
          }),
          new BooleanItem({
            key: 'comparisons',
            value: true,
            title:
              'apply certain optimizations to binary nodes, e.g. !(a <= b) → a > b (only when unsafe_comps), attempts to negate binary nodes, e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc.'
          }),
          new BooleanItem({
            key: 'conditionals',
            value: true,
            title: 'apply optimizations for if-s and conditional expressions'
          }),
          new BooleanItem({ key: 'dead_code', value: true, title: 'remove unreachable code' }),
          new BooleanItem({
            key: 'drop_console',
            value: false,
            title:
              ' Pass true to discard calls to console.* functions. If you wish to drop a specific function call such as console.info and/or retain side effects from function arguments after dropping the function call then use pure_funcs instead.'
          }),
          new BooleanItem({ key: 'drop_debugger', value: true, title: 'remove debugger; statements' }),
          new BooleanItem({ key: 'evaluate', value: true, title: 'attempt to evaluate constant expressions' }),
          new BooleanItem({
            key: 'expression',
            value: false,
            title:
              'Pass true to preserve completion values from terminal statements without return, e.g. in bookmarklets.'
          }),
          new JsonStringItem({ key: 'global_defs', value: '{}', type: 'Object', title: 'conditional compilation' }),
          new BooleanItem({ key: 'hoist_funs', value: false, title: 'hoist function declarations' }),
          new BooleanItem({
            key: 'hoist_props',
            value: true,
            title:
              'hoist properties from constant object and array literals into regular variables subject to a set of constraints. For example: var o={p:1, q:2}; f(o.p, o.q); is converted to f(1, 2);. Note: hoist_props works best with mangle enabled, the compress option passes set to 2 or higher, and the compress option toplevel enabled.'
          }),
          new BooleanItem({
            key: 'hoist_vars',
            value: false,
            title:
              'hoist var declarations (this is false by default because it seems to increase the size of the output in general)'
          }),
          new BooleanItem({ key: 'if_return', value: true, title: 'optimizations for if/return and if/continue' }),
          new BooleanItem({ key: 'inline', value: true, title: 'embed simple functions' }),
          new BooleanItem({ key: 'join_vars', value: true, title: 'join consecutive var statements' }),
          new BooleanItem({
            key: 'keep_fargs',
            value: true,
            title:
              'Prevents the compressor from discarding unused function arguments. You need this for code which relies on Function.length.'
          }),
          new BooleanItem({
            key: 'keep_fnames',
            value: false,
            title:
              'Pass true to prevent the compressor from discarding function names. Useful for code relying on Function.prototype.name. See also: the keep_fnames mangle option.'
          }),
          new BooleanItem({
            key: 'keep_infinity',
            value: false,
            title:
              'Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.'
          }),
          new BooleanItem({
            key: 'loops',
            value: true,
            title: 'optimizations for do, while and for loops when we can statically determine the condition.'
          }),
          new BooleanItem({
            key: 'negate_iife',
            value: true,
            title:
              'negate "Immediately-Called Function Expressions" where the return value is discarded, to avoid the parens that the code generator would insert.'
          }),
          new NumberItem({
            key: 'passes',
            value: 1,
            min: 1,
            title:
              'The maximum number of times to run compress. In some cases more than one pass leads to further compressed code. Keep in mind more passes will take more time.'
          }),
          new BooleanItem({
            key: 'properties',
            value: true,
            title: 'rewrite property access using the dot notation, for example foo["bar"] → foo.bar'
          }),
          new JsonStringItem({
            key: 'pure_funcs',
            value: '',
            type: 'Array',
            title:
              "You can pass an array of names and UglifyJS will assume that those functions do not produce side effects. DANGER: will not check if the name is redefined in scope. An example case here, for instance var q = Math.floor(a/b). If variable q is not used elsewhere, UglifyJS will drop it, but will still keep the Math.floor(a/b), not knowing what it does. You can pass pure_funcs: [ 'Math.floor' ] to let it know that this function won't produce any side effect, in which case the whole statement would get discarded. The current implementation adds some overhead (compression will be slower)."
          }),
          new BooleanItem({
            key: 'pure_getters',
            value: false,
            title:
              'If you pass true for this, UglifyJS will assume that object property access (e.g. foo.bar or foo["bar"]) doesn\'t have any side effects. Specify "strict" to treat foo.bar as side-effect-free only when foo is certain to not throw, i.e. not null or undefined.'
          }),
          new BooleanItem({
            key: 'reduce_funcs',
            value: true,
            title:
              'Allows single-use functions to be inlined as function expressions when permissible allowing further optimization. Enabled by default. Option depends on reduce_vars being enabled. Some code runs faster in the Chrome V8 engine if this option is disabled. Does not negatively impact other major browsers.'
          }),
          new BooleanItem({
            key: 'reduce_vars',
            value: true,
            title: 'Improve optimization on variables assigned with and used as constant values.'
          }),
          new BooleanItem({
            key: 'sequences',
            value: true,
            title:
              'join consecutive simple statements using the comma operator. May be set to a positive integer to specify the maximum number of consecutive comma sequences that will be generated. If this option is set to true then the default sequences limit is 200. Set option to false or 0 to disable. The smallest sequences length is 2. A sequences value of 1 is grandfathered to be equivalent to true and as such means 200. On rare occasions the default sequences limit leads to very slow compress times in which case a value of 20 or less is recommended.'
          }),
          new BooleanItem({
            key: 'side_effects',
            value: true,
            title:
              'Pass false to disable potentially dropping functions marked as "pure". A function call is marked as "pure" if a comment annotation /*@__PURE__*/ or /*#__PURE__*/ immediately precedes the call. For example: /*@__PURE__*/foo();'
          }),
          new BooleanItem({
            key: 'switches',
            value: true,
            title: 'de-duplicate and remove unreachable switch branches'
          }),
          new BooleanItem({
            key: 'toplevel',
            value: false,
            title:
              'drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)'
          }),
          // top_retain null (array, comma-separated, RegExp or function)
          new BooleanItem({
            key: 'typeofs',
            value: true,
            title:
              'Transforms typeof foo == "undefined" into foo === void 0. Note: recommend to set this value to false for IE10 and earlier versions due to known issues.'
          }),
          new BooleanItem({ key: 'unsafe', value: false, title: 'apply "unsafe" transformations' }),
          new BooleanItem({
            key: 'unsafe_comps',
            value: false,
            title:
              'Reverse < and <= to > and >= to allow improved compression. This might be unsafe when an at least one of two operands is an object with computed values due the use of methods like get, or valueOf. This could cause change in execution order after operands in the comparison are switching. Compression only works if both comparisons and unsafe_comps are both set to true.'
          }),
          new BooleanItem({
            key: 'unsafe_Function',
            value: false,
            title: 'compress and mangle Function(args, code) when both args and code are string literals.'
          }),
          new BooleanItem({
            key: 'unsafe_math',
            value: false,
            title:
              'optimize numerical expressions like 2 * x * 3 into 6 * x, which may give imprecise floating point results.'
          }),
          new BooleanItem({
            key: 'unsafe_proto',
            value: false,
            title: 'optimize expressions like Array.prototype.slice.call(a) into [].slice.call(a)'
          }),
          new BooleanItem({
            key: 'unsafe_regexp',
            value: false,
            title: 'enable substitutions of variables with RegExp values the same way as if they are constants.'
          }),
          new BooleanItem({
            key: 'unused',
            value: true,
            title:
              'drop unreferenced functions and variables (simple direct variable assignments do not count as references unless set to "keep_assign")'
          }),
          new BooleanItem({
            key: 'warnings',
            value: false,
            title: 'display warnings when dropping unreachable code or unused declarations etc.'
          })
        ]
      }),
      new JsonBoolItem({
        key: 'mangle',
        value: true,
        title: 'Mangle options',
        childItems: [
          new BooleanItem({
            key: 'eval',
            value: false,
            title: 'Pass true to mangle names visible in scopes where eval or with are used.'
          }),
          new BooleanItem({
            key: 'keep_fnames',
            value: false,
            title:
              'Pass true to not mangle function names. Useful for code relying on Function.prototype.name. See also: the keep_fnames compress option.'
          }),
          new JsonStringItem({
            key: 'reserved',
            value: '[]',
            type: 'Array',
            title: 'Pass an array of identifiers that should be excluded from mangling. Example: ["foo", "bar"].'
          }),
          new BooleanItem({
            key: 'toplevel',
            value: false,
            title: 'Pass true to mangle names declared in the top level scope.'
          }),
          new JsonBoolItem({
            key: 'properties',
            value: false,
            title: 'Mangle properties options',
            childItems: [
              new BooleanItem({
                key: 'builtins',
                value: false,
                title:
                  'Use true to allow the mangling of builtin DOM properties. Not recommended to override this setting.'
              }),
              // new JsonStringItem({ key: 'debug', value: 'false', title: 'Mangle names with the original name still present. Pass an empty string "" to enable, or a non-empty string to set the debug suffix.' }),
              new BooleanItem({ key: 'keep_quoted', value: false, title: 'Only mangle unquoted property names.' }),
              new JsonStringItem({
                key: 'regex',
                value: '',
                type: 'RegExp',
                title: 'Pass a RegExp literal to only mangle property names matching the regular expression.'
              }),
              new JsonStringItem({
                key: 'reserved',
                value: '[]',
                type: 'Array',
                title: 'Do not mangle property names listed in the reserved array.'
              })
            ]
          })
        ]
      }),

      new JsonBoolItem({
        key: 'output',
        value: true,
        title: 'Output options',
        disabled: true,
        childItems: [
          new BooleanItem({
            key: 'ascii_only',
            value: false,
            title:
              'escape Unicode characters in strings and regexps (affects directives with non-ascii characters becoming invalid)'
          }),
          new BooleanItem({
            key: 'beautify',
            value: true,
            title:
              'whether to actually beautify the output. Passing -b will set this to true, but you might need to pass -b even when you want to generate minified code, in order to specify additional arguments, so you can use -b beautify=false to override it.'
          }),
          // new BooleanItem({
          //   key: 'bracketize',
          //   value: true,
          //   title:
          //     'always insert brackets in if, for, do, while or with statements, even if their body is a single statement.'
          // }),
          new BooleanItem({
            key: 'comments',
            value: false,
            title:
              'pass true or "all" to preserve all comments, "some" to preserve some comments, a regular expression string (e.g. /^!/) or a function.'
          }),
          new NumberItem({ key: 'indent_level', value: 4, title: '' }),
          new NumberItem({ key: 'indent_start', value: 0, title: 'prefix all lines by that many spaces' }),
          new BooleanItem({
            key: 'inline_script',
            value: false,
            title: 'escape the slash in occurrences of </script in strings'
          }),
          new BooleanItem({
            key: 'keep_quoted_props',
            value: false,
            title: 'when turned on, prevents stripping quotes from property names in object literals.'
          }),
          new NumberItem({ key: 'max_line_len', value: 0, title: 'maximum line length (for uglified code)' }),
          new StringItem({
            key: 'preamble',
            value: '',
            title:
              'when passed it must be a string and it will be prepended to the output literally. The source map will adjust for this text. Can be used to insert a comment containing licensing information, for example.'
          }),
          new BooleanItem({
            key: 'preserve_line',
            value: false,
            title: 'pass true to preserve lines, but it only works if beautify is set to false.'
          }),
          new BooleanItem({ key: 'quote_keys', value: false, title: 'pass true to quote all keys in literal objects' }),
          new NumberItem({
            key: 'quote_style',
            value: 0,
            min: 0,
            max: 3,
            title:
              'preferred quote style for strings (affects quoted property names and directives as well):0 -- prefers double quotes, switches to single quotes when there are more double quotes in the string itself. 0 is best for gzip size. 1 -- always use single quotes 2 -- always use double quotes 3 -- always use the original quotes'
          }),
          new BooleanItem({
            key: 'semicolons',
            value: true,
            title:
              'separate statements with semicolons. If you pass false then whenever possible we will use a newline instead of a semicolon, leading to more readable output of uglified code (size before gzip could be smaller; size after gzip insignificantly larger).'
          }),
          new BooleanItem({ key: 'shebang', value: true, title: 'preserve shebang #! in preamble (bash scripts)' }),
          new BooleanItem({
            key: 'webkit',
            value: true,
            title: 'enable workarounds for WebKit bugs. PhantomJS users should set this option to true.'
          }),
          new NumberItem({
            key: 'width',
            value: 80,
            min: 1,
            title:
              "only takes effect when beautification is on, this specifies an (orientative) line width that the beautifier will try to obey. It refers to the width of the line text (excluding indentation). It doesn't work very well currently, but it does make the code generated by UglifyJS more readable."
          }),
          new BooleanItem({
            key: 'wrap_iife',
            value: false,
            title: 'pass true to wrap immediately invoked function expressions. See #640 for more details.'
          })
        ]
      }),

      new BooleanItem({
        key: 'toplevel',
        value: false,
        title:
          'set to true if you wish to enable top level variable and function name mangling and to drop unused variables and functions.'
      }),
      new JsonStringItem({
        key: 'nameCache',
        value: '{}',
        type: 'Object',
        title:
          'pass an empty object {} or a previously used nameCache object if you wish to cache mangled variable and property names across multiple invocations of minify(). Note: this is a read/write property. minify() will read the name cache state of this object and update it during minification so that it may be reused or externally persisted by the user.'
      }),
      new BooleanItem({ key: 'ie8', value: false, title: 'set to true to support IE8.' }),
      new BooleanItem({
        key: 'keep_fnames',
        value: false,
        title:
          'pass true to prevent discarding or mangling of function names. Useful for code relying on Function.prototype.name.'
      })
    ];

    return Items;
  }
}

interface Base<T> {
  key: string;
  value: T;
  title: string;
  ctrlType?: string;
  [propName: string]: any;
}

export class ItemBase<T> implements Base<T> {
  key: string;
  value: T;
  title: string;
  ctrlType?: string;
  constructor(option: Base<T>) {
    Object.assign(this, option);
  }
}

class BooleanItem extends ItemBase<boolean> {
  ctrlType = 'checkbox';
  constructor(option: Base<boolean>) {
    super(option);
  }
}

class NumberItem extends ItemBase<number> {
  ctrlType = 'number';
  min = 0;
  max = Number.MAX_VALUE;
  constructor(option: Base<number>) {
    super(option);
    if (option.hasOwnProperty('min')) {
      this.min = option.min;
    }
    if (option.hasOwnProperty('max')) {
      this.max = option.max;
    }
  }
}

class StringItem extends ItemBase<string> {
  ctrlType = 'text';
  constructor(option: Base<string>) {
    super(option);
  }
}

class JsonBoolItem extends ItemBase<boolean> {
  disabled = false;
  ctrlType = 'jsonbool';
  childItems: (BooleanItem | NumberItem | StringItem | JsonBoolItem)[];
  constructor(option: Base<boolean>) {
    super(option);
    if (option.hasOwnProperty('disabled')) {
      this.disabled = option.disabled;
    }
  }
}

class JsonStringItem extends StringItem {
  ctrlType = 'jsonstring';
  type: 'Object' | 'Array' | 'RegExp' | 'String';

  constructor(option: Base<string>) {
    super(option);
    if (option.hasOwnProperty('type')) {
      this.type = option.type;
    }
  }

  getValue(value) {
    if (this.type === 'RegExp') {
      try {
        if (value) {
          return new RegExp(value, 'g');
        }
        return null;
      } catch (error) {
        return null;
      }
    } else {
      try {
        if (value) {
          const obj = JSON.parse(value);
          return this.getType(obj) === this.type ? obj : null;
        }
        return null;
      } catch (error) {
        return null;
      }
    }
  }

  getType(value: any) {
    return getType(value);
  }

  isValid(ctrl: AbstractControl): ValidationErrors | null {
    const value = ctrl.value.trim();
    if (this.type === 'RegExp') {
      try {
        if (value) {
          const reg = new RegExp(value, 'g');
        }
        return null;
      } catch (error) {
        return { mismatch: true };
      }
    } else {
      try {
        if (value) {
          const obj = JSON.parse(value);
          return this.getType(obj) === this.type ? null : { mismatch: true };
        }
        return null;
      } catch (error) {
        return { mismatch: true };
      }
    }
  }
}

function getType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
