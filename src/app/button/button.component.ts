import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input()
button! :Button;
@Input()
  checkButtonsStates!: void;

@Output()
buttonSent: EventEmitter<number> = new EventEmitter<number>();

  Onsubmit(id: number): void {
    this.buttonSent.emit(id);
    this.button.isClicked = true;
  }

}
