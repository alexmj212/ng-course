import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-component',
  template: `
    <h1>{{ title | uppercase }}</h1>
    <br><strong>Price:</strong> {{ price | currency:symbol:true }}
    <br><strong>Date:</strong> {{ birthday | date:'medium' }}
    <br><h2>Generic: {{ price | currency:symbol:true | generic:'(includes discount)'}}</h2>
  `
})
export class AppComponent implements OnInit {

  title: string;
  price: number;
  symbol: string;
  birthday: any;

  constructor() {

  }

  ngOnInit() {
    this.title = 'Hello Lexington';
    this.price = 3.50;
    this.symbol = 'USD';
    this.birthday = new Date();

  }
  
}
