import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { TowerSearchService } from '../shared/tower-search.service';
import { Tower } from '../shared/hero'; 

@Component({
  moduleId: module.id,
  selector: 'tower-search',
  templateUrl: 'tower-search.component.html',
  styleUrls: [ 'tower-search.component.css' ],
  providers: [TowerSearchService]
})

export class TowerSearchComponent implements OnInit {
  towers: Observable<Tower[]>;
  private searchTerms = new Subject<string>();
  
  constructor(
    private towerSearchService: TowerSearchService,
    private router: Router) {}
  
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
    
    this.towers = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.towerSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Tower[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Tower[]>([]);
      });
  }
  
  gotoDetail(tower: Tower): void {
    let link = ['/towers', tower._id];
    this.router.navigate(link);
    //this.searchTerms = new Subject<string>();
  }
}
