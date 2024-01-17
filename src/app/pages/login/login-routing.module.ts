import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { Comp1Component } from 'src/app/components/comp1/comp1.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      {
        path: 'uno',
        component: Comp1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
