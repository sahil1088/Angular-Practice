import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { NewComponent } from "./new.component";

@NgModule({
  declarations: [
    //AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
//  bootstrap: [AppComponent]
bootstrap : [NewComponent]
})
export class AppModule { }
