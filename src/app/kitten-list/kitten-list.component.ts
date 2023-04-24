import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-kitten-list',
  templateUrl: './kitten-list.component.html',
  styleUrls: ['./kitten-list.component.css']
})
export class KittenListComponent {
  @Input() kittenList!: Kitten[]

  @Output() choosenKitten: EventEmitter<string>= new EventEmitter<string>();

  chooseKitten(kittenName: string): void {

    this.choosenKitten.emit(kittenName);


  }

}
