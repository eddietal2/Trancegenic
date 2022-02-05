import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, ToastController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';


interface LoginUser {
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user = null;

  authenticationState = new BehaviorSubject(false);
  userType = new BehaviorSubject('none');
  userFullName = new BehaviorSubject('none');
  userEmail = new BehaviorSubject('none');
  userPicture = new BehaviorSubject('none');


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private helper: JwtHelperService,
    private alertController: AlertController,
    private toastController: ToastController,
    ) { }

  /**
   * Get all the featured posts for the Landing Page
   * @returns Landing Page Featured Products Observerable
   */
   login(user: LoginUser) {
    return this.http.post(`${this.BACKEND_URL}/auth/login`,
      {
        email: user.email,
        password: user.password
      }
    )
    .pipe(
      tap(res => {
        if (!res) {
          console.log('There was no response.');
        }
        this.storage.set(this.TOKEN_KEY, res['token']);
        this.user = this.helper.decodeToken( res['token']);
        this.userType.next('user');
        this.authenticationState.next(true);
        this.loginSuccessToast();
        console.log('Active User: ' + this.user.email);
        console.log('Auth State: ' + this.authenticationState.value);
      }),
      catchError(e => {
        console.error(e);
        if (e.error.msg === 'There was an error on the BackEnd') {
          this.loginErrorAlert('Incorrect Email/Password', 'The email and password don\'t match.');
        } else if (e.error.msg === 'The user does not exist') {
          this.loginErrorAlert('Nonexistent User Account', 'There is no account with that email address.');
        } else if (e.error.msg === 'Bad Password') {
          this.loginErrorAlert('Bad Password', 'The password you entered for this email is incorrect.'); 
        } else if (e.error.msg === 'You need to send email and password') {
          this.loginErrorAlert('Forgot Email or Password', 'Please include an Email or a Password'); 
        }
        else if (e.message.startsWith('Http failure response')) {
          this.loginErrorAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
        }  else {
          this.loginErrorAlert('Email/Password Error', 'Please try again.');
        }
        throw new Error(e);
      })
    )
    .subscribe(
      data => {
        console.log(data);
        this.userFullName.next(data['fullName']);
        this.userPicture.next(data['picture']);
        this.userEmail.next(data['email']);
      }
    );
  }

  /**
   *  
   */
   logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      this.user = null;
      this.authenticationState.next(false);
      this.userType.next('none');
      this.userFullName.next('none');
      // this.userPicture.next('none');
      this.userEmail.next('none');
      window.location.reload();
    });
  }

  /**
   * 
   * @param header 
   * @param msg 
   */
  async loginErrorAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

  async loginSuccessToast() {
    const toast = await this.toastController.create({
      message: 'You have successfully logged in!',
      cssClass: 'success-toast',
      duration: 3000,
    });
    toast.present();
  }

  /**  looks up our storage for a valid JWT and if found, changes our authenticationState
  */
  async checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        const decoded = this.helper.decodeToken(token);
        const isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          console.log('Decoded Token: ' + JSON.stringify(decoded));
          this.authenticationState.next(true);
          console.log(decoded);
          // Check to see if the Token is for an admin or user
          // if(decoded.email === 'eddielacrosse2@gmail.com') {
          //   this.userType.next('admin');
          //   this.userPicture.next(decoded.picture);
          //   this.userEmail.next(decoded.email);
          //   this.userFullName.next(decoded.fullName);
          // } 
          if((decoded.email !== 'eddielacrosse2@gmail.com' && decoded.email !== '')) {
            this.userType.next('user');
            this.userPicture.next(decoded.picture);
            this.userEmail.next(decoded.email);
            this.userFullName.next(decoded.fullName);
          }
        } else {
          console.log('Token Removed from Storage');
          this.storage.remove(this.TOKEN_KEY);
        }
      }
    });
  }
}


