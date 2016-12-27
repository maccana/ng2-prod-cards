import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'main-navbar',
  // template: '<h1>My First Angular 2 App</h1><profile></profile>',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent  { brandName = 'NG2 App'; }
