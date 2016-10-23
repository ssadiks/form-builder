import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero, Tower } from './hero';

@Injectable()
export class HeroService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private towersUrl = 'app/towers';  // URL to web api
  
  constructor(private http: Http) { }
  
  getTowers(): Promise<Tower[]> {
      return this.http.get(this.towersUrl)
                 .toPromise()
                 .then(response => response.json().data as Tower[])
                 .catch(this.handleError);
  }
  
  getHero(idtower: number, idhero: number): Promise<Hero> {
    return this.getTower(idtower)
               .then(tower => tower.heroes.find(hero => hero.id === idhero));
  }
  
  getTower(id: number): Promise<Tower> {
      return this.getTowers()
                 .then(towers => towers.find(tower => tower.id === id));
  }  
  
  deleteTower(idTower: number): Promise<void> {
      const url = `${this.towersUrl}/${idTower}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }
  
  //TODO
  deleteHero(idTower: number, idHero: number): Promise<void> {
    const url = `${this.towersUrl}/${idTower}/heroes/${idHero}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.towersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  
  update(hero: Hero): Promise<Hero> {
    const url = `${this.towersUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
