import { Component, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  newKitten: Kitten = new Kitten("", "", new Date(), "");

  @Output() kittenAdded: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  constructor() { }

  createKitten(): void {
    this.kittenAdded.emit(this.newKitten);
    this.newKitten = new Kitten("", "", new Date(), ""); //CHAGPT
  }
}
