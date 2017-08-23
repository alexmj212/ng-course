import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-component',
  template: `
    <style type="text/css" rel="stylesheet">
      .header { background: yellow; }
    </style>
    <h1>Parent Header: {{ headerText }}</h1>
    <child [title]="childHeaderText" (titleChanged)="titleChanged($event)"></child>
    <br><strong>Price:</strong> {{ price | currency:symbol:true }}
    <br><strong>Date:</strong> {{ birthday | date:'medium' }}
    <br><strong>Generic Pipe:</strong> {{ price | currency:symbol:true | generic:'About'}}
    <br><h2 [class.header]="lochnessIsEnabled">{{swapString}}</h2>
    <br><button (click)="swapMe()">Lochness or Girl Scout?</button>
  `
})
export class AppComponent implements OnInit {

  headerText: string;
  childHeaderText: string;
  price: number;
  symbol: string;
  birthday: any;
  header = 'yellow';
  lochnessIsEnabled = false;
  lochnessString = 'Lochness Monster';
  girlScoutString = 'Girl Scout';
  swapString = this.girlScoutString;

  constructor() {

  }

  ngOnInit() {
    this.headerText = 'Hello Children';
    this.childHeaderText = 'Hey Chef';
    this.price = 3.50;
    this.symbol = 'USD';
    this.birthday = new Date();

  }

  swapMe(){
    if(this.lochnessIsEnabled) {
      this.swapString = this.girlScoutString;
    } else {   
      this.swapString = this.lochnessString;
    }
    this.lochnessIsEnabled = !this.lochnessIsEnabled;

  }

  titleChanged(title: string){
    this.headerText = "Goodbye Chef";
    this.childHeaderText = "Goodbye Children";
  }
  
}
