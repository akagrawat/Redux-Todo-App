import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-todo-app';
  todoData : any;;
   constructor(private todo: TodoService) {}
   ngOnInit() {
    // this.todoData = this.todo.loadTodoData().subscribe((res) =>{
    // console.log(res);
    // });
   }
}
