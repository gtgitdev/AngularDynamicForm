import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { AdHocListComponent } from './ad-hoc-list/ad-hoc-list.component';
import { AdHocMainComponent } from './ad-hoc-main/ad-hoc-main.component';
import { AdhocRequestComponent } from './adhoc-request/adhoc-request.component';
import { AdHocService } from './services/ad-hoc.service';
import { DomainService } from './services/domain.service';

const routes: Routes = [
  {
    path: 'adhoc',
    children: [
      { path: '', component: AdHocMainComponent},
      { path: ':domainid', component: AdHocMainComponent },
      { path: ':domainid/:documentid', component: AdhocRequestComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AdHocListComponent,
    AdHocMainComponent,
    AdhocRequestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    AdHocService,
    DomainService,
  ]
})
export class AdHocModule { }
