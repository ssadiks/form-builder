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
var router_1 = require('@angular/router');
var towers_list_component_1 = require('./towers-list/towers-list.component');
var tower_detail_component_1 = require('./tower-detail/tower-detail.component');
var heroes_component_1 = require('./heroes-list/heroes.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var routes = [
    { path: '', redirectTo: '/towers', pathMatch: 'full' },
    { path: 'towers', component: towers_list_component_1.TowersComponent },
    { path: 'towers/:id/heroes', component: heroes_component_1.HeroesComponent },
    { path: 'towers/:id', component: tower_detail_component_1.TowerDetailComponent },
    { path: 'towers/:id/heroes/:idhero', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map