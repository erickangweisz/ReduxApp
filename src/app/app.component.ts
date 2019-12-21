import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  counter: number;

  constructor() {
    this.counter = 10;
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
