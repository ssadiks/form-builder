import { Component, OnInit } from '@angular/core';

import { Hero, Tower } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.html',
    styleUrls : ['heroes.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  tower: Tower;
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.heroService.getTower(id)
        .then(tower => this.tower = tower);
    });
    //console.log(this.tower); 
    //this.getHeroes();
  }
  //ngOnInit(): void {
  //  this.getHeroes();
  //}
  
  //getHeroes(): void { 
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroes = this.tower.heroes;
    //console.log(this.heroes); 
  //}
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.createHero(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(tower: Tower, hero: Hero): void {
    this.heroService
        .deleteHero(tower._id, hero._id)
        .then(() => {
          this.tower.heroes = this.tower.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  
  goBack(): void {
    this.location.back();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    console.log(this.selectedHero._id);
    this.router.navigate(['/towers/' + this.tower._id + '/heroes/' + this.selectedHero._id]);
  }
  
}