import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls : ['app/components/heroes/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/towers" routerLinkActive="active">Towers</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'Tour of Heroes';
}
