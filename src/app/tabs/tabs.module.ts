import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RouterModule } from '@angular/router';
import { ProductsPage } from '../pages/products/products.page';
import { BlogPage } from '../pages/blog/blog.page';
import { LandingPage } from '../pages/landing/landing.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { CartPage } from '../pages/cart/cart.page';
import { CustomComponentsModule } from '../components/custom-compontents.module';

@NgModule({
  imports: [
    IonicModule,
    SwiperModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CustomComponentsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage, 
    ProductsPage,
    BlogPage,
    LandingPage,
    ProfilePage,
    CartPage
  ]
})
export class TabsPageModule {}
