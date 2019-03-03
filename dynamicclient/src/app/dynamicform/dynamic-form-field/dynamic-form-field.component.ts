import { Component, OnInit, Input } from '@angular/core';
import { FieldBase } from '../models/field-base';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() field: FieldBase;

  constructor() { }

  ngOnInit() {
    console.log(this.field);
  }

}
