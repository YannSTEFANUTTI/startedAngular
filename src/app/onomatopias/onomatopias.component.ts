import { Component } from "@angular/core";

@Component({
  selector: 'app-onomatopias',
  templateUrl: './onomatopias.component.html',
  styleUrls: ['./onomatopias.component.css']
})
export class OnomatopiasComponent {
  onomatopiaList: string[] = ['miaou', 'coin', 'bééé', 'oh yeaaaah'];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopiaList.push(newOnomatopia);
  }
}
