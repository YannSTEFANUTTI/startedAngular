import { Component, OnInit } from '@angular/core';
import { Button } from '../models/button.model';

@Component({
  selector: 'app-button-racine',
  templateUrl: './button-racine.component.html',
  styleUrls: ['./button-racine.component.css']
})
export class ButtonRacineComponent implements OnInit{
  buttonList: Button[] = [new Button(1, "Boutton 01", false), new Button(2, "Boutton 02", false), new Button(3, "Boutton 03", false)];
  
allButtonsClicked: boolean = false;

checkButtonsStates():void {
   if (this.buttonList.find((button)=> button.isClicked === false)){
    } else this.allButtonsClicked = true;
  }
  
  ngOnInit(){
    console.table(this.buttonList);
    setInterval(() => {
      this.checkButtonsStates();
    }, 1000);
  }
  
}
