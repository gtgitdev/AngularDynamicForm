import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { AdHocListComponent } from './ad-hoc-list/ad-hoc-list.component';
import { AdHocMainComponent } from './ad-hoc-main/ad-hoc-main.component';

const routes: Routes = [
  {path: 'adhoc/:id', component: AdHocMainComponent},
  {path: 'adhoc', redirectTo: 'adhoc/1'},
];

@NgModule({
  declarations: [
    AdHocListComponent,
    AdHocMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class AdHocModule { }
