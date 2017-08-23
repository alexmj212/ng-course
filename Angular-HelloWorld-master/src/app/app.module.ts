import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { GenericPipe } from './generic.pipe';
import { ChildComponent } from "./child.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GenericPipe, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }