import { Component, OnInit } from '@angular/core';

import { Hero, Tower } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  towers: Tower[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getTowers()
      .then(towers => this.towers = towers);
  }

  //gotoDetail(hero: Hero): void {
  //  let link = ['/detail', hero.id];
  //  this.router.navigate(link);
  //}
  
  gotoTower(tower: Tower): void {
      let link = ['/tower', tower.id];
      this.router.navigate(link);
  }

}

