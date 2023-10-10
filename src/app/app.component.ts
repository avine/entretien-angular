import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { AppService } from './app.service';
import { Todo } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected todos$ = new BehaviorSubject<Todo[] | undefined>(undefined);

  protected remainingTodosCount$: Observable<number> = this.todos$.pipe(
    filter((todos): todos is Todo[] => todos !== undefined),
    map((todos): number => todos.reduce((count, { completed }) => count + (completed ? 0 : 1), 0)),
  );

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.fetchTodos().subscribe((todos) => this.todos$.next(todos));
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.todos$.next(this.todos$.value);
  }
}
