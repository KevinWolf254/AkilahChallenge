import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChechModulusComponent } from './chech-modulus/chech-modulus.component';


@NgModule({
  declarations: [
    AppComponent,
    ChechModulusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
