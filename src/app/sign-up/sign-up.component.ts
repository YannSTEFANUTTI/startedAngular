import { Component } from '@angular/core';
import { FormModel } from '../models/formModel.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  model: FormModel = new FormModel("", "", "", "")
  onSubmit(): void{
    console.log(this.model);
    
  }

}
