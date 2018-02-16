import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../shared/todo.service';
import * as moment from 'moment';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class TodoEditComponent implements OnInit {

  title: string = '';
  discription: string = '';
  date = new FormControl(moment());

  constructor(private todoService: TodoService,
    private matDialogRef: MatDialogRef<TodoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    const { todo } = this.data
    this.title = todo.title
    this.discription = todo.discription
    this.date = new FormControl(moment(new Date(todo.date)));
  }

  onSubmit() {
    const { title, discription, date } = this;
    const newTodo = { ...this.data.todo, title, discription, date: date.value.format('L') }
    this.data.update(newTodo)

    this.matDialogRef.close()
  }

}
