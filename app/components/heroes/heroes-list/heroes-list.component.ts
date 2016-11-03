import { Component, OnInit } from '@angular/core';

import { Hero, Tower } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'heroes-list',
    templateUrl: 'heroes-list.html',
    styleUrls : ['heroes-list.css']
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  tower: Tower;
  heroes: Hero[];
  selectedHero: Hero;
  newHero: Hero;
  
  public powers = [
    { value: 'speed', display: 'Speed' },
    { value: 'strength', display: 'Strength' },
    { value: 'flexibility', display: 'Flexibility' }
  ];
  
  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
  ngOnInit(): void {    
    
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.heroService.getTower(id)
        .then(tower => this.tower = tower);
    });
    this.newHero = {
      //_id: 7,
      name: '',
      power: this.powers[0].value,
      isChampion: false
    }


  }
  
  add(tower: Tower, h: Hero, isValid: boolean): void {

    if(isValid)
      this.heroService.createHero(tower, this.newHero)
        .then(hero => {
          tower.heroes.push(hero);
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