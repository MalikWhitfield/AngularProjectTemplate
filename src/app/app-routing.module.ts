//Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from './views/login-page/login-page.component';
import { ResetPasswordComponent } from "./views/reset-password/reset-password.component";

const routes: Routes = [
    { path: 'Login', component: LoginPageComponent },
    { path: "ResetPassword", component: ResetPasswordComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
