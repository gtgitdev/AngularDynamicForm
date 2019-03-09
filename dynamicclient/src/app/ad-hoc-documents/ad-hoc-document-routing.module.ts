import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdHocDocumentListComponent } from './ad-hoc-document-list/ad-hoc-document-list.component';

const routes: Routes = [
  {path: 'documents/:domainId', component: AdHocDocumentListComponent},
  {path: 'documents', redirectTo: '/domains'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdHocDocumentRoutingModule { }
