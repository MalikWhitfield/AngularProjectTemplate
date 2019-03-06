//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { ResetPasswordComponent } from "./views/reset-password/reset-password.component";
import { PersonalInfoFormComponent } from "./components/personal-info-form/personal-info-form.component";

const routes: Routes = [
  { path: "ResetPassword", component: ResetPasswordComponent },
  { path: "PersonalInfoForm", component: PersonalInfoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
