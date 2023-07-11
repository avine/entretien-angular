import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface TodosResponseDto {
  todos: {
    id: number;
    userId: number;
    todo: string;
    completed: any;
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: TodosResponseDto['todos'] = [];

  constructor(private httpClient: HttpClient) {
    httpClient.get<TodosResponseDto>('https://dummyjson.com/todos?limit=5').subscribe((response: TodosResponseDto) => {
      this.todos = response.todos;
    });
  }

  remainingTodosCount() {
    let count = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (!this.todos[i].completed) {
        count++;
      }
    }
    return count;
  }

  checkboxId(todo: TodosResponseDto['todos'][0]) {
    return 'check-' + todo.id;
  }

  toggleTodo(todo: TodosResponseDto['todos'][0]) {
    todo.completed = !todo.completed;
  }
}
