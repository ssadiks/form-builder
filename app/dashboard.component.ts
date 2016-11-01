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
  selectedTower: Tower;
  public newTower: Tower;
  

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.newTower = {
      _id: 0,
      title: '',
      heroes: []
    }
    this.heroService.getTowers()
      .then(towers => this.towers = towers);
  }

  add(t: Tower, isValid: boolean): void {

    if(isValid)
      this.newTower.heroes = [];
      this.heroService.createTower(this.newTower)
        .then(tower => {
          this.towers.push(tower);
          this.selectedTower = null;
        });
        console.log(this.towers);
  }
  
  delete(tower: Tower): void {
    this.heroService
        .deleteTower(tower._id)
        .then(() => {
          this.towers = this.towers.filter(t => t !== tower);
          //if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  
  gotoDetail(tower: Tower): void {
      let link = ['/towers/' + tower._id];
      this.router.navigate(link);
  }
  
  gotoTower(tower: Tower): void {
      let link = ['/towers/' + tower._id + '/heroes'];
      this.router.navigate(link);
  }

}

