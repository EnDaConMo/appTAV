import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPage } from './recuperar.page';
import { Comp1Component } from 'src/app/components/comp1/comp1.component';


const routes: Routes = [
  {
    path: '',
    component: RecuperarPage,

    children: [
      {
        path: 'comp1',
        component: Comp1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPageRoutingModule {}
