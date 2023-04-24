import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from './../models/kitten.model';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css']
})
export class KittenCardComponent {

  @Input() kittenToCard!: Kitten;
  @Input() showButton: boolean = true;

  @Output() choosenKitten: EventEmitter<string> = new EventEmitter<string>();

  chooseKitten(kittenName: string): void {

    this.choosenKitten.emit(kittenName);

  }

}
