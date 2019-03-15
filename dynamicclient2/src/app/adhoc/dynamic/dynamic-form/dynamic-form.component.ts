import { Component, OnInit } from '@angular/core';
import { FieldBase } from '../field-base';
import { DynamicFieldService } from '../../services/dynamic-field.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  fields: FieldBase[];
  initialValues: FieldBase[];

  constructor(private dynamicFieldService: DynamicFieldService) { }

  ngOnInit() {
    this.dynamicFieldService.getFieldsByDocumentId(1).subscribe((data) => {
      console.log(data);
    });
  }

}
