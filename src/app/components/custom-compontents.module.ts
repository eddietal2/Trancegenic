import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Toolbars
import { MobileTopToolbarComponent } from './mobile-top-toolbar/mobile-top-toolbar.component';

// Icons
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';

// Product Rating
import { RatingsStarsComponent } from './ratings-stars/ratings-stars.component';
import { RatingPickerComponent } from './rating-picker/rating-picker.component';

// Product Wrappers
import { FeaturedLgComponent } from './products/featured-lg/featured-lg.component';
import { FeaturedMobileComponent } from './products/featured-mobile/featured-mobile.component';
import { RelatedLgComponent } from './products/related-lg/related-lg.component';
import { RelatedMobileComponent } from './products/related-mobile/related-mobile.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent,
        RatingPickerComponent,
        FeaturedLgComponent,
        FeaturedMobileComponent,
        RelatedLgComponent,
        RelatedMobileComponent

    ],
    exports: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent,
        RatingPickerComponent,
        FeaturedLgComponent,
        FeaturedMobileComponent,
        RelatedLgComponent,
        RelatedMobileComponent

    ]
})
export class CustomComponentsModule {}
