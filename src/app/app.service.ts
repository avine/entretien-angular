import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from './app.types';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  fetchTodos(limit = 5): Observable<Todo[]> {
    return this.httpClient
      .get<{ todos: Todo[] }>('https://dummyjson.com/todos', { params: { limit } })
      .pipe(map(({ todos }) => todos));
  }
}
