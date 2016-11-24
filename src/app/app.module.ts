import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service'; 
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
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
  providers: [AuthHttp, 
   AuthGuard, 
   AuthService,
   provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'token',
            tokenGetter: (() => localStorage.getItem('id_token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        })],
  bootstrap: [AppComponent]
})
export class AppModule { }
