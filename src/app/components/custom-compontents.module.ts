import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileTopToolbarComponent } from './mobile-top-toolbar/mobile-top-toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        MobileTopToolbarComponent
    ],
    exports: [
        MobileTopToolbarComponent
    ]
})
export class CustomComponentsModule {}
