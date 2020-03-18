import * as spinner from './spinner';
import * as todos from './todo';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    spinner: spinner.State;
    todo: todos.IAppState
}

export const reducers: ActionReducerMap<State> = {
    spinner: spinner.reducer,
    todo: todos.reducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];