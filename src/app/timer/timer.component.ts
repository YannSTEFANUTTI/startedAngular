import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataservice.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  constructor(public DataService: DataService) { }
  ngOnInit(): void {
    this.DataService.getData().subscribe()
  }
}