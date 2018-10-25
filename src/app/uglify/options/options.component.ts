import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBase } from '../config.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() items: ItemBase<boolean | string | number | {}>[];
  @Input() form: FormGroup;
  @Input() groupName: string;
  constructor() {}

  ngOnInit() {}
}
