import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';

@NgModule({
  imports: [
    CustomComponentsModule,
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
