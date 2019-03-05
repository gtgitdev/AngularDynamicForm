import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentmanagerMainComponent } from './documentmanager-main/documentmanager-main.component';

const routes: Routes = [
  {path: 'documents', component: DocumentmanagerMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentmanagerRoutingModule { }
