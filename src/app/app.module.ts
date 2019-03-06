import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginPageComponent } from './views/login-page/login-page.component';
=======
import { HomePageComponent } from './views/home-page/home-page.component';
>>>>>>> development

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginPageComponent
=======
    HomePageComponent
>>>>>>> development
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
