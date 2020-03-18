import { ITodo } from '../models/todo';
import * as TodosActionType from '../actions/action';
import { createReducer, on } from '@ngrx/store';

export const STATE_KEY = 'todo';

export interface IAppState {
    todos: ITodo[];
    loading: boolean;
    error: any;
    demo: boolean;
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {

    todos: [],
    loading: false,
    error: null,
    demo: true,
    lastUpdate: null
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(TodosActionType.addTodo, (state, action) => ({
        ...state, ...{
            todos: state.todos.concat(Object.assign({}, action, { id: (state.todos.length != 0) ? (state.todos[state.todos.length - 1].id + 1) : 0 })),
            lastUpdate: new Date()
        }, loading: false, demo: false
    })),
    on(TodosActionType.toggleTodo, (state, action) => ({
        ...state, loading: false, ...toggleTodo(state, action),
    })),
    on(TodosActionType.removeTodo, (state, action) => ({
        ...state,
        ...{
            todos: state.todos.filter(t => t.id !== action.id),
            lastUpdate: new Date()
        }, loading: false
    })),
    on(TodosActionType.removeAllTodo, (state, action) => ({
        ...state,
        ...{
            todos: [],
            lastUpdate: null
        }, loading: false
    })),
    on(TodosActionType.loadTodo, (state, action) => ({
        ...state, loading: true, error: null
    })),
    on(TodosActionType.loadTodoSuccess, (state, action) => ({
        ...state, loading: false, error: null, ...action
    })),
    on(TodosActionType.loadTodoFail, (state, action) => ({
        ...state, loading: false, error: action
    })),
);


function toggleTodo(state, action) {
    var todo = state.todos.find(t => t.id === action.id);
    var index = state.todos.indexOf(todo);
    return Object.assign({
        todos: [...state.todos.slice(0, index),
        Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
        ...state.todos.slice(index + 1)],
        lastUpdate: new Date()
    });
}