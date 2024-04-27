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
import { HomeShellComponent } from './presentation/home-shell/home-shell.component';

const routes: Routes = [
	{
		path: '', component: HomeShellComponent
	},
	// {
	// 	path: ':id', component: CreateTablaPruebaPageComponent
	// },
	// {
	// 	path: '**',
	// 	redirectTo: ''
	// }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class HomeShellRouting { }
