import * as Counter from './counter.actions';

export function counterReducer(state: number = 10, action: Counter.actions) {
    switch (action.type) {
        case Counter.INCREMENT:
            return state + 1;

        case Counter.DECREMENT:
            return state - 1;

        case Counter.MULTIPLY:
            return state * action.payload;

        case Counter.DIVIDE:
            return state / action.payload;

        case Counter.RESET:
            return 0;

        default:
            return state;
    }
}
