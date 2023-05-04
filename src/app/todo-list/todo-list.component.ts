import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        <li *ngFor="let todo of todos">
          {{todo}}
        </li>
      </ul>
    </div>
  `,
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
