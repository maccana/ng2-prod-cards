import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
        <h1>Hello {{ name }}</h1>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
        `,
     directives: [ROUTER_DIRECTIVES]
})
export class AppComponent  { name = 'Angular'; }
