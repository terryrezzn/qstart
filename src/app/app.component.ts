import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Terry says welcome to the jungle {{name}}</h1>`,
})
export class AppComponent  { name = 'Brandon and Shamus'; }
