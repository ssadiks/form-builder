// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Tower } from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id,
    selector: 'dashboard-detail',
    templateUrl: 'dashboard-detail.component.html',
    styleUrls: [ 'dashboard-detail.component.css' ]
})
export class DashboardDetailComponent implements OnInit {
  
    tower: Tower;
    
    constructor(
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
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.heroService.updateTower(this.tower)
        .then(() => this.goBack());
    }


}
