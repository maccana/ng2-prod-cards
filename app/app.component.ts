import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  // selector: 'my-app',
  // template: `
  //       <h1>Hello {{ name }}</h1>
  //       <!-- Routed views go here -->
  //       <router-outlet></router-outlet>
  //       `,
  moduleId:module.id,
  selector: 'my-app',
  // template: '<h1>My First Angular 2 App</h1><profile></profile>',
  templateUrl: 'app.component.html',
  directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent  { name = 'Angular'; }
