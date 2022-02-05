import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/onboarding/login.service';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private loginService: LoginService,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.storage.create();
    this.loginService.checkToken();
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });

    // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.loginService.authenticationState.subscribe(async state => {
      if(state) {
        this.router.navigate(['home']);
      }
      else {
        this.router.navigate(['']);
      }
    });
  }


}
