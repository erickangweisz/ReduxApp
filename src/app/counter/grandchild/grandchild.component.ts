import { Component } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  reset(): void {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
