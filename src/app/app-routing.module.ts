//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { ResetPasswordComponent } from "./views/reset-password/reset-password.component";
import { PersonalInfoFormComponent } from "./components/personal-info-form/personal-info-form.component";
import { Error404Component } from "./views/error404/error404.component";

const routes: Routes = [
  { path: "ResetPassword", component: ResetPasswordComponent },
  { path: "PersonalInfoForm", component: PersonalInfoFormComponent },
  { path: "Error404", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
