import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `<p>{{ name }}</p>`,
})
export class DashboardComponent  { name = 'Dashboard'; }
