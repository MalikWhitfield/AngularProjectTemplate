//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/SharedModule";
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";

//Components
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./views/home-page/home-page.component";
import { LogOutComponent } from "./views/log-out/log-out.component";
import { ResetPasswordComponent } from "./views/reset-password/reset-password.component";
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { Error404Component } from './views/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogOutComponent,
    ResetPasswordComponent,
    PersonalInfoFormComponent,
    Error404Component
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
