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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
