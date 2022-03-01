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
    
  }



  /**
   * Send Register Code
   */
  sendRegisterCode(code: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/auth/send-register-code`, { code, email })
  }
}
