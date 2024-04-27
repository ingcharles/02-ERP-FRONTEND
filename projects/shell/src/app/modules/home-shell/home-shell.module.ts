import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './presentation/home-shell/home-shell.component';
import { HomeShellRouting } from './home-shell.routing';



@NgModule({
  declarations: [
   // HomeShellComponent
  ],
  imports: [
    CommonModule,
    HomeShellRouting
  ],

})
export class HomeShellModule { }
