import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as TodosActionType from '../actions/action';
import { ITodo } from '../models/todo';

@Injectable()
export class TodoEffect {

    constructor(private actions$: Actions,
        private todoServices: TodoService) {
        setTimeout(() => {
            this.todoServices.loadTodoData().subscribe(res => {
                console.log(res)
            })
            this.loadTodos$.subscribe((res) => {
                console.log('sdvd' + res);
            });
        }, 1000)
    }

    loadTodos$: Observable<any> = createEffect((): any =>
        this.actions$.pipe(
            ofType(TodosActionType.loadTodo),
            mergeMap(() => {
                return this.todoServices.loadTodoData().pipe(map((todo: ITodo[]) => (TodosActionType.loadTodoSuccess({ todos: todo }))), catchError(() => EMPTY));
            })
        )
    )

    // @Effect()
    // loadTodos$ = this.actions$.pipe(
    //     ofType(TodosActionType.GET_TODOS),
    //     switchMap(() => {
    //         return this.todoServices.loadTodoData().pipe(
    //             map((todos: Array<any>) => new GetTodosSuccess(todos)),
    //             catchError(error => of(new GetTodosFailed(error)))
    //         )
    //     })
    // )


}

