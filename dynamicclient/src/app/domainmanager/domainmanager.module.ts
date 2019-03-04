import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainmanagerRoutingModule } from './domainmanager-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { DomainManagerService } from './services/domain-manager.service';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    DomainmanagerRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
    DomainManagerService
  ]
})
export class DomainmanagerModule { }
