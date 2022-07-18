import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./master/master.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {Notfound404Component} from "./notfound404/notfound404.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'about', component: AboutComponent},
  {path:'**', component: Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
