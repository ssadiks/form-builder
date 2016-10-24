import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { DashboardDetailComponent }   from './dashboard-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/towers', pathMatch: 'full' },
  { path: 'towers',  component: DashboardComponent },  
  { path: 'towers/:id/heroes', component: HeroesComponent },
  { path: 'towers/:id', component: DashboardDetailComponent },
  { path: 'towers/:id/heroes/:idhero', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
