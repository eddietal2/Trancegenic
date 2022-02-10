import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/onboarding/login.service';

@Component({
  selector: 'app-mobile-top-toolbar',
  templateUrl: './mobile-top-toolbar.component.html',
  styleUrls: ['./mobile-top-toolbar.component.scss'],
})
export class MobileTopToolbarComponent implements OnInit {
  authState: boolean;

  constructor(
    private loginService: LoginService,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginService.authenticationState.subscribe(
      (data) => {
        this.authState = data;
      }
    )
  }

   /**
   * Direct user to Login Page from Profile page
   */
    goToLoginPage() {
      this.router.navigateByUrl('/login');
    }

  /**
   * Log the User OUT
   */
   async logout() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout?',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button'
        }, 
        {
          text: 'Logout',
          id: 'confirm-button',
          handler: () => {
            this.loginService.logout();
            return;
          }
        }]
    });

    await alert.present();

   }

}
