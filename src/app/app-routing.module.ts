import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CartComponent} from "./components/cart/cart.component";
import {OrderComponent} from "./components/order/order.component";
import {ErrorComponent} from "./components/error/error.component";
import {ModalProductDetailComponent} from "./components/modal-product-detail/modal-product-detail.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'menu', component: MenuComponent},
  {path:'contact', component: ContactComponent},
  {path:'cart', component: CartComponent},
  {path:'order', component: OrderComponent},
  {path:'error', component: ErrorComponent},
  {path:'modal', component: ModalProductDetailComponent}
=======
import {MasterComponent} from "./master/master.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {Notfound404Component} from "./notfound404/notfound404.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'register', component: RegisterComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: Notfound404Component}
>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
