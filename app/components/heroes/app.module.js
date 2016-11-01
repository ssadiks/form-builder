"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
//import { InMemoryyDataService }  from './in-memory-data.service';
var app_component_1 = require('./app.component');
var towers_list_component_1 = require('./towers-list/towers-list.component');
var heroes_list_component_1 = require('./heroes-list/heroes-list.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var tower_detail_component_1 = require('./tower-detail/tower-detail.component');
var hero_search_component_1 = require('./hero-search/hero-search.component');
var hero_service_1 = require('./shared/hero.service');
require('./rxjs-extensions');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                //InMemoryWebApiModule.forRoot(InMemoryDataService),
                //InMemoryWebApiModule.forRoot(InMemoryyDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                towers_list_component_1.TowersComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_list_component_1.HeroesComponent,
                tower_detail_component_1.TowerDetailComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map