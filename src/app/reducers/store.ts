import { ITodo } from '../models/todo';
import * as TodosActionType from '../actions/action';
import { createReducer, on, State } from '@ngrx/store';
import { stat } from 'fs';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {

    todos: [],
    lastUpdate: null
}

// export function rootReducer(state = INITIAL_STATE, action) {
//     console.log(TodosActionType.addTodo);
//     switch (action.type) {
//         case TodosActionType.addTodo:
//             // action.id = state.todos.length + 1;
//             console.log('its working');
//             return Object.assign({}, state, {
//                 todos: state.todos.concat(Object.assign({}, action)),
//                 lastUpdate: new Date()
//             });
//         case TodosActionType.toggleTodo:
//             var todo = state.todos.find(t => t.id === action.id);
//             var index = state.todos.indexOf(todo);
//             return Object.assign({}, state, {
//                 todos: [...state.todos.slice(0, index),
//                 Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
//                 ...state.todos.slice(index + 1)],
//                 lastUpdate: new Date()
//             });
//         case TodosActionType.removeTodo:
//             return Object.assign({}, state, {
//                 todos: state.todos.filter(t => t.id !== action.id),
//                 lastUpdate: new Date()
//             });
//         // case TodosActionType.REMOVE_ALL_TODOS:
//         //     return Object.assign({}, state, {
//         //         todos: [],
//         //         lastUpdate: null
//         //     });
//         case TodosActionType.getTodos:
//             return { ...state };
//         // case TodosActionType.GET_TODOS_SUCCESS: {
//         //     return {...state, TodoList: action.payload, message: '', infoClass: ''}
//         // }

//         // case TodosActionType.GET_TODOS_FAILED: {
//         //     return {...state};
//         // }
//     }
//     return state;
// }


const rootReducer = createReducer(
    INITIAL_STATE,
    on(TodosActionType.addTodo, (state, action) => ({
        ...state, ...{
            todos: state.todos.concat(Object.assign({}, action, { id: (state.todos.length != 0) ? (state.todos[state.todos.length - 1].id + 1) : 0 })),
            lastUpdate: new Date()
        }
    })),
    on(TodosActionType.toggleTodo, (state, action) => ({
        ...state, ...toggleTodo(state, action)
    })),
    on(TodosActionType.removeTodo, (state, action) => ({
        ...state,
        ...{
            todos: state.todos.filter(t => t.id !== action.id),
            lastUpdate: new Date()
        }
    })),
    on(TodosActionType.removeAllTodo, (state, action) => ({
        ...state,
        ...{
            todos: [],
            lastUpdate: null
        }
    })),
    on(TodosActionType.loadTodo, (state, action) => ({
        ...state
    })),
    on(TodosActionType.loadTodoSuccess, (state, action) => ({
        ...state, ...action
    }))
);

export function reducer(state: IAppState | undefined, action) {
    return rootReducer(state, action);
}

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