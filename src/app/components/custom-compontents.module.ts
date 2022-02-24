import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileTopToolbarComponent } from './mobile-top-toolbar/mobile-top-toolbar.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { RatingsStarsComponent } from './ratings-stars/ratings-stars.component';
import { RatingPickerComponent } from './rating-picker/rating-picker.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent,
        RatingPickerComponent
    ],
    exports: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent,
        RatingPickerComponent
    ]
})
export class CustomComponentsModule {}
