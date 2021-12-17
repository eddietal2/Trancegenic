import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsPage implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3.3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit() {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
  }

}
