import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-kitten-racine',
  templateUrl: './kitten-racine.component.html',
  styleUrls: ['./kitten-racine.component.css']
})
export class KittenRacineComponent {
  kittenList: Kitten[] = [
    new Kitten("Bobby", "Chacal", new Date(2019, 11, 15), "https://natura-sciences.com/wp-content/uploads/2013/02/chacal-dore.jpg"),
    new Kitten("Julien", "Chacal", new Date(2017, 11, 10), "https://www.jaitoutcompris.com/img/encyclo/chacal.jpg"),
    new Kitten("Max", "chihuahua", new Date(2019, 14, 1), "https://monchihuahua.fr/wp-content/uploads/2019/03/chihuahua-poil-long.jpg"),
  ]
}
