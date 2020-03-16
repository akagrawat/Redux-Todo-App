// import { Injectable } from '@angular/core';
// import { TodoService } from '../services/todo.service';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { TodosActionType, GetTodosSuccess, GetTodosFailed } from '../action';
// import { of } from 'rxjs';
// import { switchMap, map, catchError } from 'rxjs/operators';

// @Injectable()
// export class TodoEffect {

//     constructor(private actions$: Actions,
//         private todoServices: TodoService) { }


//     @Effect()
//     getTodos$ = this.actions$.pipe(
//         ofType(TodosActionType.GET_TODOS),
//         switchMap(() => {
//             return this.todoServices.loadTodoData().pipe(
//                 map((todos: Array<any>) => new GetTodosSuccess(todos)),
//                 catchError(error => of(new GetTodosFailed(error)))
//             )
//         })
//     )

// }

