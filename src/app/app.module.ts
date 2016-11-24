import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import {PublicDealsComponent} from './public-deals.component'; 
import {PrivateDealsComponent} from './private-deals.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
