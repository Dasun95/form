import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  feet!: number;
  inch!: number;
  distance!: number;

  onHeightChange(value:string) {
    let height = parseFloat(value)/2.54;
    this.feet = Math.floor(height/12);
    this.inch = Math.floor(height%12);
  }

  onDistanceChange(value: string) {
    this.distance = parseFloat(value).toFixed(2);
  }

  onNameChange(value:string) {
    this.name = value;
  }

  onDateChange(value:string) {
    this.date = value;
  }
  
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
