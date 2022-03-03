import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { RegisterService } from 'src/app/services/onboarding/register.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  forgotPasswordModal = false;

  config: SwiperOptions = {
    slidesPerView: 1,
    allowSlideNext: false,
    allowSlidePrev: false,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };
  swiper: any;
  enterEmailForm: FormGroup;
  enterCodeForm: FormGroup;
  newPasswordForm: FormGroup;
  userStayLoggedIn: boolean;
  userEmail: string;
  code: string;
  newPassword: string;
  reTypeNewPassword: string;
  userEmailSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private registerService: RegisterService,
    private profileService: ProfileService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    ) { }

  ngOnInit() {
    this.initializeFormGroups();

    this.userEmailSub = this.loginService.userEmail.subscribe(data => {
      this.userEmail = data;
    });
  }

  // @HostListener('unload')

  /**
   * 
   */
  login(email, password) {
    let user = {
      email,
      password
    }

    this.loginService.login(user, this.userStayLoggedIn);
  }

  stayLoggedIn(e) {
    console.log(e.detail);
    let checkBoxValue = e.detail;
    if(checkBoxValue) {
      this.userStayLoggedIn = true;
      return;
    } else {
      this.userStayLoggedIn = false;
      return;
    }
  }

  /**
   * 
   */
  goToRegisterPage() {
    this.router.navigateByUrl("/register");
    return;
  }

  /**
   * 
   */
  goHome() {
    this.router.navigateByUrl("/home");
    return;
  }

  /**
   * 
   */
  initializeFormGroups() {
    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [
        Validators.required,
        Validators.pattern,
        Validators.minLength(8),
        Validators.maxLength(8),
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ]]
    })

    // Slide 1 / Enter Email
    this.enterEmailForm = this.formBuilder.group({
      emailForgot: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
    })

    // Slide 2 / Enter Code
    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    })

    // Slide 3 / New Password
    this.newPasswordForm = this.formBuilder.group({
     newPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
   ])],
    reTypeNewPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
     ])],
    currentPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
     ])],
    })



    this.enterCodeForm.valueChanges.subscribe( data => {
      console.log(data);
    })
  }

  /**
   * 
   */
  showForgotPasswordModal() {
    this.forgotPasswordModal = true;
    return;
  }

  /**
   * 
   */
  closeForgotPasswordModal() {
    this.forgotPasswordModal = false;
    return;
  }

  /**
   * 
   */
  resendCode() {
    
  }

  /**
   * 
   */
  onSwiper(swiper) {
    console.log(swiper);
    return this.swiper = swiper;
  }

  // Forgot Password Slide Functions

  /**
   * Get User's Email on Slide 1
   */
   getEmail() {
    console.clear()
    console.log(this.enterEmailForm.value)
    this.userEmail = this.enterEmailForm.value.emailForgot;
     this.generateCode(4);
     this.loginService.sendForgetCode(this.userEmail, this.code)
      .subscribe( data => {

        console.log('Send Forgot Password 200 Response.');
        this.swiper.allowSlideNext = true;

         this.swiper.slideNext();
         setTimeout(() => {
          this.swiper.allowSlideNext = false;
        }, 800);
      });
    
  }

  async generateCode(length: number) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    return this.code = result;
  }

  /**
   * Track the User's Code Input to be able to navigate to next slide.
   */
   async codeInput(e: any) {
    let userInputCode = e.detail.value;

    if(userInputCode == this.code) {
      const toast = await this.toastController.create({
        message: 'Your Code Matched!',
        cssClass: 'success-toast',
        duration: 2000
      });
      await toast.present();
      this.swiper.allowSlideNext = true;

      
      await setTimeout(() => {
          this.swiper.slideNext();

          setTimeout(() => {
            this.swiper.allowSlideNext = false;
          }, 800);
      }, 2000);

    }
   }

  /**
   * Track the User's Password and ReTypePassword Input to successfully change password.
   */
  newPasswordInput(e: any) {
    let newPassword= e.detail.value;
    this.newPassword = newPassword;
    console.log('New Password: ' + newPassword);

    if(this.newPassword == this.reTypeNewPassword) {
      console.log('Passwords Match!');
    }
  }

  /**
   * Track the User's Password and ReTypePassword Input to successfully change password.
   */

  passwordsMatched = false; 

  async retypeNewPasswordInput(e: any) {
    let reTypeNewPassword = e.detail.value;
    this.reTypeNewPassword = reTypeNewPassword;
    console.log('Retyped New Password: ' + reTypeNewPassword);

    if(this.newPassword == this.reTypeNewPassword) {
      console.log('Passwords Match!');
      const toast = await this.toastController.create({
        message: 'Your Passwords Matched!',
        cssClass: 'success-toast',
        duration: 2000
      });
      await toast.present();
      this.passwordsMatched = true;

    }
  }

  /**
   * 
   */
  async resetPassword() {
    console.clear();
    console.log(this.userEmail);

    if(!this.passwordsMatched) {

      const toast = await this.toastController.create({
        message: 'Your Passwords do not Match!!',
        cssClass: 'danger-toast',
        duration: 2000
      });
      await toast.present();
    }

    if(this.passwordsMatched) {
      await this.profileService.changePassword(
        this.newPassword, 
        this.newPasswordForm.value.currentPassword, 
        this.userEmail)

      await this.enterEmailForm.reset();
      await this.enterCodeForm.reset();
      await this.newPasswordForm.reset();

      await setTimeout(() => {
        this.closeForgotPasswordModal();
      }, 800);

    }
  }


}
