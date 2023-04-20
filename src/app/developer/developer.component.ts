import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  model: Developer = new Developer("Smith", "John", 32, "Homme", "Lorem, ipsum dolor sit BIOGARPHIE",
    [ new Skill("Angular", "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png", "https://angular.io/")]
  )
  
}

