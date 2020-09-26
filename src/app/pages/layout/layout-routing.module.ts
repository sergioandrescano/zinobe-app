import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './container/layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children:[
      { path: 'home', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
