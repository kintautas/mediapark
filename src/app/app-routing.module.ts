import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

import { AuthGuard } from './auth-guard.service'


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'table', component: TableComponent, canActivate:[AuthGuard] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
