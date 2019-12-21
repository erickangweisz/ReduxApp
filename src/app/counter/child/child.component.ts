import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent {

  @Input() counter: number;

  constructor() {}

  multiply(): void {
    this.counter *= 2;
  }

  divide(): void {
    this.counter /= 2;
  }
}
