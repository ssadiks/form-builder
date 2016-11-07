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
var hero_service_1 = require('../shared/hero.service');
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var TowersComponent = (function () {
    function TowersComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.towers = [];
        this.state = 'inactive';
        this.stateButton = 'inactive';
    }
    TowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newTower = {
            _id: 0,
            title: '',
            name: '',
            display_label: false,
            heroes: []
        };
        this.heroService.getTowers()
            .then(function (towers) { return _this.towers = towers; });
    };
    TowersComponent.prototype.togglestates = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.stateButton = (this.stateButton === 'inactive' ? 'active' : 'inactive');
    };
    TowersComponent.prototype.add = function (t, isValid) {
        var _this = this;
        if (isValid)
            this.newTower.heroes = [];
        this.heroService.createTower(this.newTower)
            .then(function (tower) {
            _this.towers.push(tower);
            _this.selectedTower = null;
        });
        console.log(this.towers);
    };
    TowersComponent.prototype.delete = function (tower) {
        var _this = this;
        this.heroService
            .deleteTower(tower._id)
            .then(function () {
            _this.towers = _this.towers.filter(function (t) { return t !== tower; });
            //if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    };
    TowersComponent.prototype.gotoDetail = function (tower) {
        var link = ['/towers/' + tower._id];
        this.router.navigate(link);
    };
    TowersComponent.prototype.gotoTower = function (tower) {
        var link = ['/towers/' + tower._id + '/heroes'];
        this.router.navigate(link);
    };
    TowersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'towers-list',
            templateUrl: 'towers-list.component.html',
            styleUrls: ['towers-list.component.css'],
            animations: [
                core_2.trigger('towersState', [
                    core_2.state('inactive', core_2.style({
                        height: '0',
                        display: 'none'
                    })),
                    core_2.state('active', core_2.style({
                        height: '*',
                        display: 'block'
                    })),
                    core_2.transition('inactive => active', core_2.animate('100ms ease-in')),
                    core_2.transition('active => inactive', core_2.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], TowersComponent);
    return TowersComponent;
}());
exports.TowersComponent = TowersComponent;
//# sourceMappingURL=towers-list.component.js.map