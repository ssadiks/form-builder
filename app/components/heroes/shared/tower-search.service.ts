import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Tower }           from './hero';

@Injectable()
export class TowerSearchService {
  
  private towersUrl = 'http://localhost:8080/api/towers/?title=';  // URL to web api
  
  constructor(private http: Http) {} 
    
  search(term: string): Observable<Tower[]> {
    return this.http
               .get(`${this.towersUrl}${term}`)
               .map((r: Response) => r.json() as Tower[]);
               //.toPromise()
               //.then(response => response.json() as Tower[])
               //.catch(this.handleError);
  }
  
  
}
