import { Component, OnInit } from '@angular/core';
import { FieldBase } from '../models/field-base';
import { FormFieldService } from '../services/form-field.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  fields: FieldBase[];

  constructor(private formFieldService: FormFieldService) {
   }

  ngOnInit() {
    this.formFieldService.getFields().subscribe((data) => {
      this.fields = data;
      console.log(this.fields);
    });
  }

}
