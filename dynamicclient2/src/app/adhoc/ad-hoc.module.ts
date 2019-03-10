import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdHocListComponent } from './ad-hoc-list/ad-hoc-list.component';
import { AdHocMainComponent } from './ad-hoc-main/ad-hoc-main.component';

const routes: Routes = [
  {path: 'adhoc', component: AdHocMainComponent},
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
    RouterModule.forChild(routes),
  ]
})
export class AdHocModule { }
