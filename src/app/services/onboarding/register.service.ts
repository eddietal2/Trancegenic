import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';

interface RegisteredUSer {
  fullName: string,
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user = null;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private helper: JwtHelperService,
    private alertController: AlertController,
    ) { }

  // TODO: Handle custom User Pictures?
  register(user: RegisteredUSer) {
    return this.http.post(`${this.BACKEND_URL}/auth/register`, 
    {fullName: user.fullName, email: user.email, password: user.password})
      .pipe(
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'The user already exists') {
            this.registerErrorAlert('The User already exists', 'Please use another Email');
          } else if (e.message.startsWith('Http failure response')) {
            this.registerErrorAlert('Server Connection Error', 'Please try again later.');
          } else (e.message.startsWith('Http failure response')) 
          throw new Error(e);
        })
      )  
    .subscribe(registerResponse => {
        console.log(registerResponse);
        return;
      });
  }

  /**
  * 
  * @param header 
  * @param msg 
  */
  async registerErrorAlert(header: string, msg: string) {
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
}
