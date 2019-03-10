import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain/domain.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { DomainManagerService } from './services/domain.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DomainDetailComponent } from './domain-detail/domain-detail.component';

@NgModule({
  declarations: [
    DomainComponent,
    SidenavComponent,
    DomainDetailComponent
  ],
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
