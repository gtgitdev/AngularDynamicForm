import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { DynamicformRoutingModule } from './dynamicform-routing.module';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    DynamicFormFieldComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    DynamicformRoutingModule,
    MaterialModule,
  ]
})
export class DynamicformModule { }
