import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeShellComponent } from './modules/home-shell/presentation/home-shell/home-shell.component';
import { LoginComponent } from './modules/login/presentation/login/login.component';
import { RegisterComponent } from './modules/register/presentation/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    pathMatch: 'full',
  },
  {
    path: 'prueba',
    loadChildren: () =>
      loadRemoteModule('mf-prueba', './pruebaModule').then((m) => m.PruebaMainModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin-master',
    loadChildren: () =>
      loadRemoteModule('mf-admin-master', './adminMasterModule').then((m) => m.AdminMasterMainModule),
  },
  // {
  //   path: 'prueba',
  //   component: WrapperComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: [
    HomeShellComponent
  ]
})
export class AppRoutingModule { }
