import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Terry says welcome {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
