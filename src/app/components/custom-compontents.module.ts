import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileTopToolbarComponent } from './mobile-top-toolbar/mobile-top-toolbar.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        MobileTopToolbarComponent,
        FavoriteIconComponent
    ],
    exports: [
        MobileTopToolbarComponent,
        FavoriteIconComponent
    ]
})
export class CustomComponentsModule {}
