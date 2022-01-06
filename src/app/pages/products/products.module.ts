import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    IonicModule,
    CustomComponentsModule,
    ProductsPageRoutingModule,
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
