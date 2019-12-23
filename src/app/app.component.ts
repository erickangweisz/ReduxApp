import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction,
         DecrementAction,
         ResetAction } from './counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  increment(): void {
    const action = new IncrementAction();
    this.store.dispatch(action);
  }

  decrement(): void {
    const action = new DecrementAction();
    this.store.dispatch(action);
  }

  reset(): void {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
