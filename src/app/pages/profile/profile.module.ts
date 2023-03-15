import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        CustomComponentsModule,
        ProfilePageRoutingModule
    ],
    declarations: []
})
export class ProfilePageModule {}
