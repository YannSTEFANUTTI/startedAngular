import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kitten-list',
  templateUrl: './kitten-list.component.html',
  styleUrls: ['./kitten-list.component.css']
})
export class KittenListComponent {
  @Input() name!: string;
  @Input() race!: string;
  @Input() date!: Date;
  @Input() picture!: string;
}
