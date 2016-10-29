// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero, Tower } from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  
    hero: Hero;
    tower: Tower;
    
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    
    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = params['id'];
        let idhero = params['idhero'];
        this.heroService.getTower(id)
          .then(tower => this.tower = tower);
        
        this.heroService.getHero(id, idhero)
          .then(hero => this.hero = hero);
        
      });
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.heroService.updateHero(this.tower._id, this.hero)
        .then(() => this.goBack());
    }


}
