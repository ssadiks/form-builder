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
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService, route, location) {
        this.router = router;
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.type_fields = [
            { value: 'text', display: 'text' },
            { value: 'select', display: 'select' },
            { value: 'checkbox', display: 'checkbox' },
            { value: 'radio', display: 'radio' },
            { value: 'textarea', display: 'textarea' },
            { value: 'button', display: 'button' }
        ];
        this.state = 'inactive';
        this.stateButton = 'inactive';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.heroService.getTower(id)
                .then(function (tower) { return _this.tower = tower; });
        });
        this.newHero = {
            _id: 1,
            type_field: this.type_fields[0].value,
            name: '',
            label: '',
            help_text: '',
            required: false,
            placeholder: '',
            options_list: ''
        };
    };
    HeroesComponent.prototype.togglestates = function () {
        console.log('toto');
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.stateButton = (this.stateButton === 'inactive' ? 'active' : 'inactive');
    };
    HeroesComponent.prototype.add = function (tower, h, isValid) {
        var _this = this;
        console.log(h);
        confirm('Do you want');
        if (isValid)
            this.heroService.createHero(tower, this.newHero)
                .then(function (hero) {
                tower.heroes.push(hero);
                _this.selectedHero = null;
            });
    };
    HeroesComponent.prototype.delete = function (tower, hero) {
        var _this = this;
        confirm('Do you wantss');
        this.heroService
            .deleteHero(tower._id, hero._id)
            .then(function () {
            _this.tower.heroes = _this.tower.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroesComponent.prototype.gotoDetail = function (hero) {
        this.router.navigate(['/towers/' + this.tower._id + '/heroes/' + hero._id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'heroes-list',
            templateUrl: 'heroes-list.html',
            styleUrls: ['heroes-list.css'],
            animations: [
                core_2.trigger('heroesState', [
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
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, router_2.ActivatedRoute, common_1.Location])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes-list.component.js.map