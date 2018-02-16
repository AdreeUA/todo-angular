import { Component, OnInit } from '@angular/core';
import { Todo } from "../shared/Todo";
import { TodoService } from '../shared/todo.service';
import { MatDialog } from '@angular/material';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService, public dialog: MatDialog) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe(todos => this.todos = todos);
  }

  create(todo: Todo) {
    this.todoService.createTodo(todo).subscribe(todo => this.todos.push(todo));
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(response => {
      let index = this.todos.indexOf(todo);

      if (index > -1) {
        this.todos.splice(index, 1)
      }
    });
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo).subscribe(response => {
      todo.completed = !todo.completed;
    });
  }

  edit(todo: Todo) {
    this.dialog.open(TodoEditComponent, { data: { todo, update: this.update }, width: '50vw' });
  }

  update = (newTodo: Todo) => {

    this.todoService.updateTodo(newTodo).subscribe(response => {
      this.todos = this.todos.map(todo => todo.id === newTodo.id ? { ...todo, ...newTodo } : todo)
    });
  }

}
