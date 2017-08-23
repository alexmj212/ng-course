import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { GenericPipe } from './generic.pipe';
import { ChildComponent } from "./child.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GenericPipe, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }