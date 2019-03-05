import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'dynamicform', loadChildren: './dynamicform/dynamicform.module#DynamicformModule'},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
