import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { TowersComponent }   from './towers-list/towers-list.component';
import { HeroesComponent }      from './heroes-list/heroes-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { TowerDetailComponent }  from './tower-detail/tower-detail.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './shared/hero.service';
import { SplitToTabPipe } from './shared/pipes/split-to-multi-tab.pipe';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TowersComponent,
    HeroDetailComponent,
    HeroesComponent,
    TowerDetailComponent,
    HeroSearchComponent,
    SplitToTabPipe
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
