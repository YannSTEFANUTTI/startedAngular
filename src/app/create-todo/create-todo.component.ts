import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-create-todo',
  template: `
    <div>
      <h2>Ajouter une nouvelle tâche</h2>
        <label>
          Text :
          <input type="text" [(ngModel)]="description">
        </label>
        <button (click)="add()">Ajouter</button>
    </div>
  `,
})
export class CreateTodoComponent implements OnInit {
  description: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  add() {
    this.todoService.addTodo(
      this.description,
    );
    this.description='';
  }
}
