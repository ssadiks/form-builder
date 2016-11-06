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
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_service_1 = require('../shared/hero.service');
var TowerDetailComponent = (function () {
    function TowerDetailComponent(router, heroService, route, location) {
        this.router = router;
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    TowerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.heroService.getTower(id)
                .then(function (tower) { return _this.tower = tower; });
        });
    };
    TowerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TowerDetailComponent.prototype.save = function (tower, isValid) {
        var _this = this;
        if (isValid)
            this.heroService.updateTower(this.tower)
                .then(function () { return _this.goBack(); });
    };
    TowerDetailComponent.prototype.gotoHeroes = function (tower) {
        this.router.navigate(['/towers/' + this.tower._id + '/heroes/']);
    };
    TowerDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tower-detail',
            templateUrl: 'tower-detail.component.html',
            styleUrls: ['tower-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_2.Router, hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], TowerDetailComponent);
    return TowerDetailComponent;
}());
exports.TowerDetailComponent = TowerDetailComponent;
//# sourceMappingURL=tower-detail.component.js.map