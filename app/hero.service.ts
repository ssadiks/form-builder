import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero, Tower } from './hero';

@Injectable()
export class HeroService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  //private towersUrl = 'app/towers';  // URL to web api
  private towersUrl = 'http://localhost:8080/api/towers/';  // URL to web api
  private heroesUrl = '/heroes/';  // URL to web api
  
  constructor(private http: Http) { }
  
  createTower(title: string): Promise<Tower> {
      return this.http
        .post(this.towersUrl, JSON.stringify({title: title}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }  
  
  //OK
  getTowers(): Promise<Tower[]> {
      return this.http.get(this.towersUrl)
                 .toPromise()
                 .then(response => response.json() as Tower[])
                 .catch(this.handleError);
  }  
  
  // OK
  getTower(id: number): Promise<Tower> {
      return this.getTowers()
                 .then(towers => towers.find(tower => tower._id === id));
  }
  
  // OK
  updateTower(tower: Tower): Promise<Tower> {
    const url = `${this.towersUrl}${tower._id}`;
    console.log(url);console.log(JSON.stringify(tower))
    return this.http
      .put(url, JSON.stringify(tower), {headers: this.headers})
      .toPromise()
      .then(() => tower)
      .catch(this.handleError);
  }
  
  // OK
  deleteTower(idTower: number): Promise<void> {
      const url = `${this.towersUrl}${idTower}`;
      console.log(url);
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }
  
  createHero(name: string): Promise<Hero> {
    return this.http
      .post(this.towersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  
  // OK
  getHero(idtower: number, idhero: number): Promise<Hero> {
    return this.getTower(idtower)
               .then(tower => tower.heroes.find(hero => hero._id === idhero));
  }
  
  // OK
  updateHero(idTower: number, hero: Hero): Promise<Hero> {
    const url = `${this.towersUrl}${idTower}${this.heroesUrl}${hero._id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  
  // OK
  deleteHero(idTower: number, idHero: number): Promise<void> {
    const url = `${this.towersUrl}${idTower}${this.heroesUrl}${idHero}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  
  
  
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
