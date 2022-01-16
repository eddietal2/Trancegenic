import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    SwiperModule,
    ProductsPageRoutingModule,
  ],
  declarations: []
})
export class ProductsPageModule {}
