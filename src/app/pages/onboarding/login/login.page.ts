import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    spaceBetween: 0,
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.initializeFormGroups();
  }

  /**
   * 
   */
  login() {

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    })

    // Slide 1 / Enter Email
    this.enterEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })

    // Slide 2 / Enter Code
    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    })

    // Slide 3 / New Password
    this.newPasswordForm = this.formBuilder.group({
     newPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])],
    reTypeNewPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
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

  /**
   * 
   */
  onSlideChange() {
  }

  changeName() {

  }

  onSubmit() {
    
  }


}
