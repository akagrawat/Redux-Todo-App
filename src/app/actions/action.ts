import { Action } from '@ngrx/store'
import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo';

// export enum X {
//     ADD_TODO = '[Todo] Add Todo',
//     GET_TODOS = 'GET_TODOS',
//     GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
//     TOGGLE_TODO = 'TOGGLE_TODO',
//     REMOVE_TODO = 'REMOVE_TODO',
//     GET_TODOS_FAILED = 'GET-TODOS-FAILED',
//     REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS'
// }

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
    '[todo] Todo loaded success',
    props<{ todos: Array<any> }>()
)
// export class GetTodos implements Action {
//     readonly type = TodosActionType.GET_TODOS;
// }

// export class GetTodosSuccess implements Action {
//     readonly type = TodosActionType.GET_TODOS_SUCCESS;
//     constructor(public payload: Array<any>) { }
// }

// export class GetTodosFailed implements Action {
//     readonly type = TodosActionType.GET_TODOS_FAILED;
//     constructor(public payload: string) { }
// }

// export type TodosActions = GetTodos | GetTodosSuccess | GetTodosFailed;
