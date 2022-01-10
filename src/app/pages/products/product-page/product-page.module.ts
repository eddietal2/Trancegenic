import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentsModule,
    SwiperModule,
    IonicModule,
    ProductPagePageRoutingModule
  ],
  declarations: [ProductPagePage]
})
export class ProductPagePageModule {}
