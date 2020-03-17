import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeAllTodo, startSpinner } from 'src/app/actions/action';

@Component({
    selector: 'app-todo-overview',
    templateUrl: './todo-overview.component.html',
    styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {
    todo: any;
    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.select('todo').subscribe((res) => {
            this.todo = res;
        })
    }

    clearTodos() {
        this.store.dispatch(startSpinner())
        setTimeout(() => {
            this.store.dispatch(removeAllTodo());
        })
    }

}
