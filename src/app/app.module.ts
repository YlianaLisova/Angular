import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './app-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
