import { style } from '@angular/animations';
import { Component } from '@angular/core';

interface User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent {

  user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  displayAge: boolean = true;
  name: string = "Bob";

  imageSrc: string = "https://via.placeholder.com/350x150";

  kickAge(): void {
    this.displayAge = !this.displayAge
  }

  /*  constructor() { }
 
   ngOnInit(): void {
   } */
}
