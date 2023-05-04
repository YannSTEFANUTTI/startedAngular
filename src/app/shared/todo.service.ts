import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todos: string[] = ["test", "ttt", "rrr"];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }
}