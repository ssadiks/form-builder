import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls : ['app/components/heroes/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav class="c-nav">
      <a routerLink="/towers" routerLinkActive="active">List of Forms</a>
      <a routerLink="/heroes" routerLinkActive="active">Search Form</a>
    </nav>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'Form Builder Ng2';
}
