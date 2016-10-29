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
  

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getTowers()
      .then(towers => this.towers = towers);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.heroService.createTower(title)
      .then(tower => {
        this.towers.push(tower);
        this.selectedTower = null;
      });
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

