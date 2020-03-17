import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo, loadTodo, startSpinner } from 'src/app/actions/action';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todoForm: FormGroup;
    todo: any;

    constructor(
        private formBuilder: FormBuilder,
        public spinner: NgxSpinnerService,
        private store: Store<any>) { }

    ngOnInit() {
        this.createTodoForm();
        this.store.dispatch(loadTodo());
        console.log(this.store.select('todo'));
        this.store.select('todo').subscribe((res) => {
            this.todo = res;
            console.log(res);
        });
    }
    onSubmit() {
        this.store.dispatch(startSpinner());

        setTimeout(() => {
            this.store.dispatch(addTodo(this.todoForm.value));
            this.todoFormControls.description.reset();
            this.todoFormControls.responsible.reset();
            this.todoFormControls.priority.setValue('low');
        }, 1000)


    }

    toggleTodo(todo) {
        this.store.dispatch(startSpinner());
        setTimeout(() => {
            this.store.dispatch(toggleTodo({ id: todo.id }));
        }, 1000)

    }

    removeTodo(todo) {
        this.store.dispatch(startSpinner());
        setTimeout(() => {
            this.store.dispatch(removeTodo({ id: todo.id }));
        }, 1000)

    }

    changeTodoStatus(todo) {
        this.store.dispatch(startSpinner());
        setTimeout(() => {
            this.store.dispatch(toggleTodo({ id: todo.id }));
        }, 1000)
    }

    createTodoForm() {
        this.todoForm = this.formBuilder.group({
            id: [0, []],
            description: ['', [Validators.required]],
            responsible: ['', [Validators.required]],
            priority: ['low', [Validators.required]],
            isCompleted: [false]
        });
    }

    get todoFormControls() {
        return this.todoForm.controls;
    }

}
