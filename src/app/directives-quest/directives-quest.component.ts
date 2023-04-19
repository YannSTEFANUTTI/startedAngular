import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-quest',
  templateUrl: './directives-quest.component.html',
  styleUrls: ['./directives-quest.component.css']
})
export class DirectivesQuestComponent {
  title: string = "Bonjour!"
  isAdmin: boolean = false;
  switchEdit(): void {
    this.isAdmin = !this.isAdmin
  }
}
