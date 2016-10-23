import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/towers', pathMatch: 'full' },
  { path: 'towers',  component: DashboardComponent },
  { path: 'tower/:id/hero/:idhero', component: HeroDetailComponent },
  { path: 'tower/:id', component: HeroesComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
