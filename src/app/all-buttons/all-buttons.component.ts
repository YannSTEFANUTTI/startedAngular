import { Component, Input } from '@angular/core';
import { Button } from '../models/button.model';

@Component({
  selector: 'app-all-buttons',
  templateUrl: './all-buttons.component.html',
  styleUrls: ['./all-buttons.component.css']
})
export class AllButtonsComponent {

  @Input()
  buttonList!: Button[];
  @Input()
  allButtonsClicked!: boolean;
  @Input()
  checkButtonsStates!: void;

  numberOfButton!: number;

  onReceiveID(id: number): void {

    this.numberOfButton = id
  }

}
