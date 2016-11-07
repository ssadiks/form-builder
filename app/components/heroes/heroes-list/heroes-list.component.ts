import { Component, OnInit } from '@angular/core';

import { Hero, Tower } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'heroes-list',
    templateUrl: 'heroes-list.html',
    styleUrls : ['heroes-list.css'],
    animations: [
      trigger('heroesState', [
        state('inactive', style({
          height: '0',
          display: 'none'
        })),
        state('active',   style({
          height: '*',
          display: 'block'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
      ])
    ]
})

export class HeroesComponent implements OnInit {
  tower: Tower;
  heroes: Hero[];
  selectedHero: Hero;
  newHero: Hero;
  
  public type_fields = [
    { value: 'text', display: 'text' },
    { value: 'select', display: 'select' },
    { value: 'checkbox', display: 'checkbox' },
    { value: 'radio', display: 'radio' },
    { value: 'textarea', display: 'textarea' },
    { value: 'button', display: 'button' }
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
      //_id: 1,
      type_field: this.type_fields[0].value,
      name: '',
      label: '',
      help_text: '',
      required: false,
      placeholder: '',
      options_list: ''
    }
  }

  state: string = 'inactive';
  stateButton: string = 'inactive';
  togglestates() {
    console.log('toto');
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.stateButton = (this.stateButton === 'inactive' ? 'active' : 'inactive');
  }
  
  add(tower: Tower, h: Hero, isValid: boolean): void {
  console.log(h);
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
  

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/towers/' + this.tower._id + '/heroes/' + hero._id]);
  }
  
}