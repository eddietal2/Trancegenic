import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    CartPageRoutingModule
  ],
  declarations: []
})
export class CartPageModule {}
