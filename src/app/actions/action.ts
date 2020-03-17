import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo';

export const addTodo = createAction(
    '[Todo] Add Todo',
    props<ITodo>());

export const getTodos = createAction(
    '[Todo] Todo List'
)

export const toggleTodo = createAction(
    '[Todo] Toggle Todo',
    props<{ id: string }>());

export const removeTodo = createAction(
    '[Todo] Remove Todo',
    props<{ id: string }>()
);

export const removeAllTodo = createAction(
    '[Todo] Remove All Todo'
);

export const loadTodo = createAction(
    '[Todo] Load Todo'
)

export const loadTodoSuccess = createAction(
    '[Todo] Todo loaded success',
    props<{ todos: Array<any> }>()
)

export const loadTodoFail = createAction(
    '[Todo] Todo load fail',
    props<any>()
)

export const startSpinner = createAction(
    '[Spinner] Show Spinner'
)

export const stopSpinner = createAction(
    '[Spinner] Stop Spinner'
)

