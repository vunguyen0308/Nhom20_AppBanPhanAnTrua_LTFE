import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SliderComponent } from './components/slider/slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ErrorComponent } from './components/error/error.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalProductDetailComponent } from './components/modal-product-detail/modal-product-detail.component';
import { RatingModule} from "ng-starrating";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './admin/product/product.component';
import { TagComponent } from './admin/tag/tag.component';
import { UserComponent } from './admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SliderComponent,
    MenuComponent,
    ContactComponent,
    CartComponent,
    OrderComponent,
    ErrorComponent,
    ModalProductDetailComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    TagComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
