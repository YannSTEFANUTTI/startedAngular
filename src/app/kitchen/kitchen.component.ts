import { Component } from '@angular/core';
import { Kitchen } from '../models/kitchen.model';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent {
  model: Kitchen = new Kitchen(0, 0, 0, 0, 0)

  isCooked: boolean = false;

  startCooking() {
    this.isCooked = true;
  }
}
