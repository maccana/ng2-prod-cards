import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { DashboardComponent }   from './dashboard.component';
import { HomeComponent }   from './home.component';
import { NavbarComponent }   from './navbar.component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
