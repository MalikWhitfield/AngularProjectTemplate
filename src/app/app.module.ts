import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { LogOutComponent } from './views/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
