import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeShellModule } from './modules/home-shell/home-shell.module';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HomeShellModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient({
      //withCredentials: true,
      ...withFetch()
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
