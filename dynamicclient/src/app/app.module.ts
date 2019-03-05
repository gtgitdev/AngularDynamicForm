import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, CoreModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { HeaderComponent } from './core/header/header.component';

import { MaterialModule } from './shared/material.module';
import { DocumentmanagerModule } from './documentmanager/documentmanager.module';
import { DomainModule } from './domains/domain.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    DocumentmanagerModule,
    DomainModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
