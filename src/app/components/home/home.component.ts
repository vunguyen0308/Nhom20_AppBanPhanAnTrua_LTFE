import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Customer_Review} from "../../model/customer_Review";
import {CustomerReviewService} from "../../services/customer-review.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  customerReviews: Array<Customer_Review> = new Array<Customer_Review>();
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    autoplay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: true
  }


  constructor(private cr: CustomerReviewService) { }

  ngOnInit(): void {
    this.cr.getReview().subscribe(res =>{
      this.customerReviews = res;
    })
  }

}
