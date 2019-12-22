import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent {
  @Input() counter: number;
  @Output() counterReset = new EventEmitter<number>();

  constructor() {}

  reset(): void {
    this.counter = 0;
    this.counterReset.emit(this.counter);
  }
}
