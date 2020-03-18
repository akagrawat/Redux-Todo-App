import * as TodosActionType from '../actions/action';
import { createReducer, on } from '@ngrx/store';

export const STATE_KEY = 'spinner';

export interface State {
    loading: boolean;
    demo: boolean;
}
export const INITIAL_STATE: State = {
    loading: false,
    demo: false
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(TodosActionType.startSpinner, (state, action) => ({
        loading: true,
        demo: true
    })),

    on(TodosActionType.stopSpinner, (state, action) => ({
        loading: false,
        demo: true
    }))
)