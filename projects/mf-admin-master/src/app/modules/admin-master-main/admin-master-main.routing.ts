/**
* Routing tabla-prueba.routing.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    Routes
* @package presentation
* @subpackage tabla-prueba
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/presentation/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', component: ResetPasswordComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  // {
  // 	path: '**',
  // 	redirectTo: ''
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AdminMasterMainRouting { }
