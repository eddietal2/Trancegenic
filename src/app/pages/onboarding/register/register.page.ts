import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/onboarding/register.service';
import { ToastController, AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';


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
  registerForm: UntypedFormGroup;
  registerSuccessModal = false;
  sendRegisterCodeSub: Subscription;
  code: string;

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
    private formBuilder: UntypedFormBuilder,
    private registerService: RegisterService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
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
      firstName: ['TEST', [Validators.required]],
      lastName: ['TEST', [Validators.required]],
      email: ['eddie@journi.org', [Validators.required, Validators.email]],
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

    // See if Passwords match in form
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

    // Create User Object to be sent to Server
    let registeredUser: RegisteredUSer = {
      fullName: 
        this.registerForm.controls.firstName.value 
        + ' ' 
        + this.registerForm.controls.lastName.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    }

    let code;

    // Send Code to the user's entered Email address
    async function generateCode(length: number) {
      let result = '';
      const characters = '0123456789';
      const charactersLength = characters.length;
  
      for ( let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      // console.log('Generated Code: ' + result);
      return code = result;
    }

    generateCode(4);
    this.code = code;
    let email = this.registerForm.controls.email.value;

    this.sendRegisterCodeSub = this.registerService.sendRegisterCode(this.code, email)
      .subscribe( async data => {
        console.log(data);

        const loading = await this.loadingController.create({
          cssClass: 'default-loading',
          spinner: 'circles',
          duration: 2000
        });

        loading.present()
          .then(() => {
            // So Alert shows after Loading
            setTimeout(() => {
        
            // Show Code Alert
            this.enterCodeAlert(email, registeredUser)
            .catch(err => {
              console.log('Error: ' + err);
              throw Error(err);
            })
            .then(response => {
              console.log('Response: ' + response);
            })
            .finally( () => {
              console.log('Enter Code Resolved');
            });
            }, 2500);
          });
      })
   }

   async enterCodeAlert(email: string, registeredUser) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter 4 Digit Code',
      message: `Please enter code that was sent to ${email}`,
      buttons: [
        {
          text: 'Submit',
          handler: async () => {
            console.log('Confirm Okay');
            let code = document.getElementById('enter-code-alert-input') as HTMLInputElement;
            // console.log('Code: ' + code.value);

            if(this.code != code.value) {
              console.log('Codes do not match');

              // Create Toast
              const toast = await this.toastController.create({
                message: 'Codes do not match!',
                cssClass: 'danger-toast',
                duration: 2000,
              });

              await toast.present();
            }

            if(this.code == code.value) {
              console.log('The Codes Matched!');

              // Register User
               await this.registerService.register(registeredUser)
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
                    this.showSuccessModal();
                  });

              // Unsubscribe from RegisterSub
              await setTimeout(() => {
                this.registerSub.unsubscribe();
                this.sendRegisterCodeSub.unsubscribe();
              }, 800);
              
            }
          },
        },
        {
          text: 'Resend',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            let code = document.getElementById('enter-code-alert-input');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
      ],
      inputs: [
        {
          name: 'code',
          type: 'text',
          id: 'enter-code-alert-input',
          placeholder: 'Enter Code Here: ',
        },
      ]
    });

    await alert.present();
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

  backToLogin(){
    this.router.navigateByUrl('/login')
  }
}
