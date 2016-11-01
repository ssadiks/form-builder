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
var hero_service_1 = require('../../../services/hero.service');
var router_1 = require('@angular/router');
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.towers = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newTower = {
            _id: 0,
            title: '',
            heroes: []
        };
        this.heroService.getTowers()
            .then(function (towers) { return _this.towers = towers; });
    };
    DashboardComponent.prototype.add = function (t, isValid) {
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
    DashboardComponent.prototype.delete = function (tower) {
        var _this = this;
        this.heroService
            .deleteTower(tower._id)
            .then(function () {
            _this.towers = _this.towers.filter(function (t) { return t !== tower; });
            //if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    };
    DashboardComponent.prototype.gotoDetail = function (tower) {
        var link = ['/towers/' + tower._id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.gotoTower = function (tower) {
        var link = ['/towers/' + tower._id + '/heroes'];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map