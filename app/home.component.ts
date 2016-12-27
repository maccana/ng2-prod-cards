import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  template: `<p>Nice to be {{ name }}</p>`,
})
export class HomeComponent  { name = 'home'; }
