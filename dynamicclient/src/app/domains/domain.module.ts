import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainListComponent } from './domain-list/domain-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { DomainManagerService } from './services/domain-manager.service';

@NgModule({
  declarations: [DomainListComponent],
  imports: [
    CommonModule,
    DomainRoutingModule,
    FlexLayoutModule,
    MaterialModule,

  ],
  providers: [
    DomainManagerService
  ]
})
export class DomainModule { }
