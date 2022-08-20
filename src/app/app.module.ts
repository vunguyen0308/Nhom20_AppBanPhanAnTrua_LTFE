import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
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
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MasterComponent } from './master/master.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
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
    ModalProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
=======
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    MasterComponent,
    Notfound404Component,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
