import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  multiply(): void {
    const action = new MultiplyAction(2);
    this.store.dispatch(action);
  }

  divide(): void {
    const action = new DivideAction(2);
    this.store.dispatch(action);
  }
}
