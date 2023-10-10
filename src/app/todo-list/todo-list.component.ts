import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../app.types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];

  @Output() toggleTodo = new EventEmitter<Todo>();
}
