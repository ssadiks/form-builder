import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero, Tower } from './hero';

@Injectable()
export class HeroService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private towersUrl = 'app/towers';  // URL to web api
  private heroesUrl = 'app/heroes';  // URL to web api
  
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
      console.log(url);
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
  
  createTower(title: string): Promise<Tower> {
      return this.http
        .post(this.towersUrl, JSON.stringify({title: title}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }
  
  update(tower: Tower): Promise<Tower> {
    const url = `${this.towersUrl}/${tower.id}`;
    return this.http
      .put(url, JSON.stringify(tower), {headers: this.headers})
      .toPromise()
      .then(() => tower)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
