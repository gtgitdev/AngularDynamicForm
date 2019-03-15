import { Component, OnInit } from '@angular/core';
import { FieldBase } from '../field-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  fields: FieldBase[];
  initialValues: FieldBase[];

  constructor() { }

  ngOnInit() {
  }

}
