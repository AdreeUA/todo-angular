import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Todo } from "../shared/Todo";
import * as moment from 'moment';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() edit = new EventEmitter();

  overClassName = ''

  constructor() {
  }

  ngOnInit() {
    let { date } = this.todo;
    const dateNow = moment();

    date = moment(new Date(date)).format('L')

    const differenceDate = moment(new Date(date)).diff(dateNow, 'days');

    (differenceDate < 0) ? this.overClassName = 'overdue' :
      (differenceDate >= 0 && differenceDate <= 3) ? this.overClassName = 'soon-overdue' :
        '';
  }

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }

  onEdit() {
    this.edit.emit(this.todo);
  }

}
