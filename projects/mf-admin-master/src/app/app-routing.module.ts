import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ResetPasswordComponent,
  //   pathMatch: 'full',
  // },
  // {
  // 	path: 'reset-password', component: ResetPasswordComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [
    //ResetPasswordComponent
  ]
})
export class AppRoutingModule { }
