import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHocDocumentRoutingModule } from './ad-hoc-document-routing.module';
import { AdHocDocumentListComponent } from './ad-hoc-document-list/ad-hoc-document-list.component';

@NgModule({
  declarations: [AdHocDocumentListComponent],
  imports: [
    CommonModule,
    AdHocDocumentRoutingModule
  ]
})
export class AdHocDocumentModule { }
