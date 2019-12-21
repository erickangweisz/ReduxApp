import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent {

  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  multiply(): void {
    this.counter *= 2;
    this.counterChange.emit(this.counter);
  }

  divide(): void {
    this.counter /= 2;
    this.counterChange.emit(this.counter);
  }
}
