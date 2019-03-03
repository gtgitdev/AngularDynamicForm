import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dynamicform', loadChildren: './dynamicform/dynamicform.module#DynamicformModule'},
  {path: '**', redirectTo: 'dynamicform'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
