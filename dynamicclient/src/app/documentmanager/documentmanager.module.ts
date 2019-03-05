import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentmanagerRoutingModule } from './documentmanager-routing.module';
import { DocumentmanagerMainComponent } from './documentmanager-main/documentmanager-main.component';

@NgModule({
  declarations: [DocumentmanagerMainComponent],
  imports: [
    CommonModule,
    DocumentmanagerRoutingModule
  ]
})
export class DocumentmanagerModule { }
