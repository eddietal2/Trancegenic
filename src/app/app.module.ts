import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CustomComponentsModule } from './components/custom-compontents.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For JWT
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    // whitelistedDomains: ['localhost:42dfc00']
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    }),
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
    AppRoutingModule],
  providers: [
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
