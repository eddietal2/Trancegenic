import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LandingPageRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    IonicModule,
    LandingPageRoutingModule
  ],
  declarations: []
})
export class LandingPageModule {}
