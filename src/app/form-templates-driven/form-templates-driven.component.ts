import { Component } from '@angular/core';
import { Order } from '../models/order.model';


@Component({
  selector: 'app-form-templates-driven',
  templateUrl: './form-templates-driven.component.html',
  styleUrls: ['./form-templates-driven.component.css']
})
export class FormTemplatesDrivenComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order("", 0, new Date(), "");

  constructor() { }

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
