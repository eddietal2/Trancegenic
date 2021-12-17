import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
import { CustomComponentsModule } from 'src/app/components/custom-compontents.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage]
})
export class BlogPageModule {}
