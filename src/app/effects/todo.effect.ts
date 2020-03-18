import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as TodosActionType from '../actions/action';
import { ITodo } from '../models/todo';

@Injectable()
export class TodoEffect {

    constructor(private actions$: Actions,
        private todoServices: TodoService) { }

    loadTodos$: Observable<any> = createEffect((): any =>
        this.actions$.pipe(
            ofType(TodosActionType.loadTodo),
            mergeMap(() => {
                return this.todoServices.loadTodoData().pipe(map((todo: ITodo[]) =>
                    (TodosActionType.loadTodoSuccess({ todos: todo }))),
                    catchError((error) => TodosActionType.loadTodoFail(error)));
            })
        )
    )
}

