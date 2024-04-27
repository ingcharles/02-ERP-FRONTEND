import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeShellComponent } from './modules/home-shell/presentation/home-shell/home-shell.component';

const routes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    pathMatch: 'full',
  },
  {
    path: 'prueba',
    loadChildren: () =>
      loadRemoteModule('mfPrueba', './pruebaModule').then((m) => m.PruebaMainModule)
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
