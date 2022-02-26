import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginService } from '../onboarding/login.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  userEmail: string;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private loadingController: LoadingController,
    ) {}
  

  /**
   * Change User's name
   * @returns 
   */
  changeName(name, password, email) {
     console.log(name, password);
    return this.http.post(`${this.BACKEND_URL}/user-profile/change-name`, {fullName: name, password, email})
      .pipe(
        // 
      )
      .subscribe( async (response) => {
        console.log(response);

        // Create Toast
        const toast = await this.toastController.create({
          message: 'You have successfully changed your Name!',
          cssClass: 'success-toast',
          duration: 2000,
        });

        // Create Loading
        const loading = await this.loadingController.create({
          cssClass: 'default-loading',
          message: 'Updating Profile ..',
          duration: 2000
        });
    
        loading.present();
        loading.onDidDismiss()
          .then(() => {
            toast.present();
            // Change Name on Profile Page
            this.loginService.userFullName.next(name);
            return;
          });


      });
  }

  /**
   * Change User's Email
   */
  changeEmail(newEmail, email, password) {
    return this.http.post(`${this.BACKEND_URL}/user-profile/change-email`, {newEmail, email, password})
      .pipe(
        // 
      )
      .subscribe( async (response) => {
        console.log(response);

        // Create Toast
        const toast = await this.toastController.create({
          message: 'You have successfully changed your Email!',
          cssClass: 'success-toast',
          duration: 2000,
        });

        // Create Loading
        const loading = await this.loadingController.create({
          cssClass: 'default-loading',
          message: 'Updating Profile ..',
          duration: 2000
        });
    
        loading.present();
        loading.onDidDismiss()
          .then(() => {
            toast.present();
            // Change Name on Profile Page
            this.loginService.userEmail.next(newEmail);
            return;
          });


      });

  }

  /**
   * Change User's Picture
   */
  changePicture() {

  }

  /**
   * Change User's Password
   */
  changePassword(newPassword: string, oldPassword: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/user-profile/change-password`, {newPassword, oldPassword, email})
      .pipe(
        // 
      )
      .subscribe( async (response) => {
        console.log(response);

        // Create Toast
        const toast = await this.toastController.create({
          message: 'You have successfully changed your Password!',
          cssClass: 'success-toast',
          duration: 2000,
        });

        // Create Loading
        const loading = await this.loadingController.create({
          cssClass: 'forgot-password-loading',
          message: 'Updating Profile ..',
          duration: 2000
        });
    
        loading.present();
        loading.onDidDismiss()
          .then(() => {
            toast.present();
            return;
          });


      });

  }

  /**
   * Unsubscribe From Newsletter
   */
  unsubscribeFromNewsLetter() {
    
  }

  /**
   * Subscribe to Newsletter
   */
  subscribeFromNewsLetter() {

  }

  getFavoriteProducts(email) {
    console.log(email);
    return this.http.post(`${this.BACKEND_URL}/user-profile/get-favorite-products`, {email})
  }
}
