import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TowersComponent }   from './towers-list/towers-list.component';
import { TowerDetailComponent }   from './tower-detail/tower-detail.component';
import { HeroesComponent }      from './heroes-list/heroes-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/towers', pathMatch: 'full' },
  { path: 'towers',  component: TowersComponent },  
  { path: 'towers/:id/heroes', component: HeroesComponent },
  { path: 'towers/:id', component: TowerDetailComponent },
  { path: 'towers/:id/heroes/:idhero', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}