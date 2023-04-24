import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { Params } from '@angular/router';
@Component({
  selector: 'app-kitten-racine',
  templateUrl: './kitten-racine.component.html',
  styleUrls: ['./kitten-racine.component.css']
})
export class KittenRacineComponent {


  kittenList: Kitten[] = [
    new Kitten("Jimmy", "Chacal", new Date(2019, 11, 15), "https://natura-sciences.com/wp-content/uploads/2013/02/chacal-dore.jpg"),
    new Kitten("Julien", "Chacal", new Date(2017, 11, 10), "https://www.jaitoutcompris.com/img/encyclo/chacal.jpg"),
    new Kitten("Max", "chihuahua", new Date(2019, 14, 1), "https://monchihuahua.fr/wp-content/uploads/2019/03/chihuahua-poil-long.jpg"),
  ];

  userKittenList: Kitten[] = [
    new Kitten("Billy", "Mouette", new Date(2017, 11, 10), "https://img.20mn.fr/NoQBW3SwTxy_laVhOMBH5ik/1200x768_les-chiens-de-race-rottweiller"),
    new Kitten("Johnny", "Ballon", new Date(2019, 14, 1), "https://img.20mn.fr/2c2xoZqdQhu84Dmhb8ci9Sk/1200x768_le-berger-australien-est-le-chien-prefere-des-francais"),
  ];

  onReceiveNewKitten(newKitten: Kitten): void {
    this.kittenList.push(newKitten);
  }

  chooseKitten(name: String): void {
    const selectKitten: any = this.kittenList.find((kitten) => kitten.name === name)
    this.userKittenList.push(selectKitten)

    const index: number = this.kittenList.findIndex((kitten: Kitten) => kitten.name === name)
    this.kittenList.splice(index, 1)

  }


  constructor() { }

  ngOnInit(): void {
  }
}
