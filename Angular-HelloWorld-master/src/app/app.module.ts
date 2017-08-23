import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { GenericPipe } from './generic.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GenericPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }