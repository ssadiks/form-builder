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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private towersUrl = 'app/towers';  // URL to web api
        this.towersUrl = 'http://localhost:8080/api/towers/'; // URL to web api
        this.heroesUrl = '/heroes/'; // URL to web api
    }
    //OK
    HeroService.prototype.createTower = function (tower) {
        return this.http
            .post(this.towersUrl, JSON.stringify(tower), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //OK
    HeroService.prototype.getTowers = function () {
        return this.http.get(this.towersUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // OK
    HeroService.prototype.getTower = function (id) {
        return this.getTowers()
            .then(function (towers) { return towers.find(function (tower) { return tower._id === id; }); });
    };
    // OK
    HeroService.prototype.updateTower = function (tower) {
        var url = "" + this.towersUrl + tower._id;
        console.log(url);
        console.log(JSON.stringify(tower));
        return this.http
            .put(url, JSON.stringify(tower), { headers: this.headers })
            .toPromise()
            .then(function () { return tower; })
            .catch(this.handleError);
    };
    // OK
    HeroService.prototype.deleteTower = function (idTower) {
        var url = "" + this.towersUrl + idTower;
        console.log(url);
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.createHero = function (tower, hero) {
        var url = "" + this.towersUrl + tower._id + this.heroesUrl;
        return this.http
            .post(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // OK
    HeroService.prototype.getHero = function (idtower, idhero) {
        return this.getTower(idtower)
            .then(function (tower) { return tower.heroes.find(function (hero) { return hero._id === idhero; }); });
    };
    // OK
    HeroService.prototype.updateHero = function (idTower, hero) {
        var url = "" + this.towersUrl + idTower + this.heroesUrl + hero._id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    // OK
    HeroService.prototype.deleteHero = function (idTower, idHero) {
        var url = "" + this.towersUrl + idTower + this.heroesUrl + idHero;
        console.log(url);
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map