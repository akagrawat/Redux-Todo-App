import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../action';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @select() todos;
    todoForm: FormGroup;

    constructor(private ngRedux: NgRedux<IAppState>,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createTodoForm();
    }
    onSubmit() {
        this.ngRedux.dispatch({ type: ADD_TODO, todo: this.todoForm.value });
    }

    toggleTodo(todo) {
        this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
    }

    removeTodo(todo) {
        this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
    }

    changeTodoStatus(todo) {
        console.log(todo);
        this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
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
