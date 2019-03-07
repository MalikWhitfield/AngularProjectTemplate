//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./views/login-page/login-page.component";
import { ResetPasswordComponent } from "./views/reset-password/reset-password.component";
import { PersonalInfoFormComponent } from "./components/personal-info-form/personal-info-form.component";
import { Error404Component } from "./views/error404/error404.component";
import { RegisterPageComponent } from './views/register-page/register-page.component';

const routes: Routes = [
  { path: "ResetPassword", component: ResetPasswordComponent },
  { path: "PersonalInfoForm", component: PersonalInfoFormComponent },
  { path: "Error404", component: Error404Component },
  { path: "Login", component: LoginPageComponent },
  {path: "Register", component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
