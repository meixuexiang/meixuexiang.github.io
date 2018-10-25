import { Component, OnInit } from '@angular/core';

const tenYears = 10 * 365 * 24 * 3600 * 1000;
const testCase = [
  1515740220000,
  'Sat Jan 13 2018 01:37:39 GMT+0800 (CST)',
  'Sat Jan 13 2018',
  '2018-1-13 01:37:39',
  '"2018-1-13"',
  '"1-13"',
  '"Fri, 12 Jan 2018 17:37:39 GMT"',
  '"Fri, 12 Jan 2018 17:37:39 GMT"',
  '"2018-01-12T17:37:39.424Z"'
];

interface Result {
  source: string | number;
  target: Date;
}

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  text: string = Date.now() % 2 ? JSON.stringify({ timeStrings: testCase }) : testCase.join('\n');
  results: Result[];
  now = Date.now();
  constructor() {
    this.onModelChange();
  }

  ngOnInit() {}

  onModelChange() {
    const json = this.parseJson();
    if (json && type(json) !== 'Number') {
      this.text = JSON.stringify(json, null, 2);
      this.results = this.traverseJson(json);
    } else {
      this.results = this.matchDateString(this.text);
    }
  }

  traverseJson(json: any): Result[] {
    const t = type(json);
    let results: Result[] = [],
      d;
    switch (t) {
      case 'Object':
        results = results.concat(...Object.keys(json).map(key => this.traverseJson(json[key])));
        break;
      case 'Array':
        results = results.concat(...json.map(v => this.traverseJson(v)));
        break;
      case 'String':
        d = new Date(json.replace(/^[^a-z\d]+|[^a-z\d]+$/gi, ''));
        if (!isNaN(d.getTime())) {
          results.push({ source: json, target: d });
        }
        break;
      case 'Number':
        if (parseInt(json, 10) === json /*  && Math.abs(this.now - json) < tenYears */) {
          d = new Date(json);
          if (!isNaN(d.getTime())) {
            results.push({ source: json, target: d });
          }
        }
        break;
      default:
        break;
    }
    return results;
  }

  matchDateString(text: string): Result[] {
    const results: Result[] = text
      .split('\n')
      .map(s => s.replace(/^[^a-z\d]+|[^a-z\d]+$/gi, ''))
      .filter(s => s)
      .map(s => ({ source: s, target: isNaN(Number(s.trim())) ? new Date(s.trim()) : new Date(Number(s.trim())) }))
      .filter(o => !isNaN(o.target.getTime()));
    return results;
  }

  parseJson() {
    try {
      return JSON.parse(this.text);
    } catch (error) {
      try {
        return eval(`(${this.text})`);
      } catch (error) {
        return null;
      }
    }
  }
}

function type(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/*
[
'1515740220000',
'Sat Jan 13 2018 01:37:39 GMT+0800 (CST)',
'Sat Jan 13 2018',
'2018-1-13 01:37:39',
'"2018-1-13"',
'"1-13"',
'"Fri, 12 Jan 2018 17:37:39 GMT"',
'"Fri, 12 Jan 2018 17:37:39 GMT"',
'"2018-01-12T17:37:39.424Z"',]

*/
