import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
//import { InMemoryyDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { TowersComponent }   from './towers-list/towers-list.component';
import { HeroesComponent }      from './heroes-list/heroes-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { TowerDetailComponent }  from './tower-detail/tower-detail.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './shared/hero.service';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    //InMemoryWebApiModule.forRoot(InMemoryyDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TowersComponent,
    HeroDetailComponent,
    HeroesComponent,
    TowerDetailComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
