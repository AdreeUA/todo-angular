import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { DragulaService } from 'ng2-dragula';
import { Todo } from "../shared/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();
  @Output() edit: EventEmitter<Todo> = new EventEmitter();
  @Output() update: EventEmitter<Todo> = new EventEmitter();

  draggerContainerName: string = 'drag-item'

  public constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.dragulaService.setOptions(this.draggerContainerName, {
      moves: function (el: any, container: any, handle: any): any {
        return handle.className === 'handle';
      }
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy(this.draggerContainerName);
  }

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }

  onToggle(todo: Todo) {
    this.toggle.emit(todo);
  }

  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }

  onUpdate(todo: Todo) {
    this.update.emit(todo);
  }

}
