import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMasterMainRouting } from './admin-master-main.routing';
import { ResetPasswordModule } from '../reset-password/reset-password.module';



@NgModule({
  declarations: [
  ],
  imports: [
    //CommonModule,
    ResetPasswordModule,
    AdminMasterMainRouting
  ]
})
export class AdminMasterMainModule { }
