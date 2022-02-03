import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileTopToolbarComponent } from './mobile-top-toolbar/mobile-top-toolbar.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { RatingsStarsComponent } from './ratings-stars/ratings-stars.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent
    ],
    exports: [
        MobileTopToolbarComponent,
        FavoriteIconComponent,
        RatingsStarsComponent
    ]
})
export class CustomComponentsModule {}
