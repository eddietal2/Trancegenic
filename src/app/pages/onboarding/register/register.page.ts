import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/onboarding/register.service';
import { ToastController } from '@ionic/angular';


interface RegisteredUSer {
  fullName: string,
  email: string,
  password: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerSuccessModal = false;

  validationMessasges = {
    firstName: [
      { type: 'text', message: 'Must be a valid Name.'}
    ],
    lastName: [
      { type: 'text', message: 'Must be a valid Name.'}
    ],
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };
  registerSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createRegisterFormBuilder();
    this.registerForm.statusChanges.subscribe( changes => {
      console.log(changes);
    })
  }
  createRegisterFormBuilder() {
    return this.registerForm = this.formBuilder.group({
      firstName: ['John', [Validators.required]],
      lastName: ['Doe', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      reTypePassword: ['12345678', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])]
    })
  }

  /**
   * 
   */
   goToLoginPage() {
     this.router.navigateByUrl("/login");
   }

  /**
   * 
   */
   async tryRegister() {

    if(this.registerForm.controls.password.value != this.registerForm.controls.reTypePassword.value) {
      console.log('Passwords do not match.');
      const toast = await this.toastController.create({
        message: 'Passwords do not match.',
        cssClass: 'danger-toast',
        duration: 4000
      });
      toast.present();
      return;
    }

    let registeredUser: RegisteredUSer = {
      fullName: 
        this.registerForm.controls.firstName.value 
        + ' ' 
        + this.registerForm.controls.lastName.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    }

    this.registerSub = await this.registerService.register(registeredUser);
    await this.showSuccessModal();
    await setTimeout(() => {
      this.registerSub.unsubscribe();
    }, 800);

   }

  /**
   * 
   */
   showSuccessModal() {
     return this.registerSuccessModal = true;
   }

  /**
   * 
   */
  closeSuccessModal() {
       this.registerSuccessModal = false;
       this.registerForm.reset();
       this.registerSuccessNavigationLoading();
       setTimeout(() => {
        this.backToLoginFromSuccessModal();
       },1000)
       
   }

   backToLoginFromSuccessModal() {
    this.router.navigateByUrl('/login')
   }

  async registerSuccessNavigationLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'success-loading',
      message: 'You should be able to Log in now!',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
