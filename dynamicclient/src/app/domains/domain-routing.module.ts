import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainListComponent } from './domain-list/domain-list.component';

const routes: Routes = [
  {path: 'domains', component: DomainListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
