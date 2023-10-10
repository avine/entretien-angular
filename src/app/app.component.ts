import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Todo } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos?: Todo[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.fetchTodos().subscribe((todos) => this.todos = todos);
  }

  remainingTodosCount() {
    if (!this.todos) {
      return;
    }
    return this.todos.reduce((count, { completed }) => count + (completed ? 0 : 1), 0);
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
