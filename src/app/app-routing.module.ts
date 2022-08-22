import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CartComponent} from "./components/cart/cart.component";
import {OrderComponent} from "./components/order/order.component";
import {ErrorComponent} from "./components/error/error.component";
import {ModalProductDetailComponent} from "./components/modal-product-detail/modal-product-detail.component";
import {DetailsComponent} from "./components/details/details.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'menu', component: MenuComponent},
  {path:'contact', component: ContactComponent},
  {path:'cart', component: CartComponent},
  {path:'order', component: OrderComponent},
  {path:'modal', component: ModalProductDetailComponent},
  {path:'details/:id', component: DetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'**', pathMatch: 'full', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
