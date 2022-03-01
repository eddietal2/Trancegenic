import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private loginService: LoginService,
    private router: Router,
    private alertController: AlertController) {}
  
  
  ngOnInit() {
    this.initializeFormGroups();
    this.getUserDetailsFromBehaviorSubjects();
  }



   /**
    * Go to Contact us Page
    */
    goToContactPage() {
      this.router.navigateByUrl("/contact");
    }


  /**
   * Direct user to Login Page from Profile page
   */
  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }




  // // //
  userEmail: string;
  userFullName: string;
  userFirstName: any;
  userLastName: any;
  userPicture: string;
  userType: string;

  /**
   * Get User profile information from Behavior Subjects in Login Service
   */
  getUserDetailsFromBehaviorSubjects() {
    this.loginService.userFullName.subscribe(
      (data) => {
        this.userFullName = data;
        let userFullNameArray = data.split(' ');
        this.userFirstName = userFullNameArray[0];
        this.userLastName = userFullNameArray[1];
      }
    )
    this.loginService.userEmail.subscribe(
      (data) => {
        this.userEmail = data;
      }
    )
    this.loginService.userPicture.subscribe(
      (data) => {
        this.userPicture = data;
      }
    )
    this.loginService.userType.subscribe(
      (data) => {
        this.userType = data;
      }
    )

  }




  // 
  changeNameForm: FormGroup;
  changePasswordForm: FormGroup;
  changeEmailForm: FormGroup;
  newsLetterForm: FormGroup;


  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'password', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  /**
   * Initializes all the FormBuilder groups for each Modal
   */
  initializeFormGroups() {
    this.changeNameForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
    })
    this.changeEmailForm = this.formBuilder.group({
      newEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]],
    })
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required,  Validators.pattern]],
      newPassword: ['', [Validators.required, Validators.pattern]],
      retypeNewPassword: ['', [Validators.required,  Validators.pattern]],
    })
    this.newsLetterForm = this.formBuilder.group({
      newsLetterCheckBox: ['', [Validators.required]],
    })
  }

 



  // 
  changeNameSub: Subscription;
  changeNameModalOpen = false;

  /**
   * Attempt to Change the User's Name
   */
  async tryChangeName() {
    let fullName = this.changeNameForm.controls.firstName.value + " " + this.changeNameForm.controls.lastName.value;
    let password = this.changeNameForm.controls.password.value;
    this.changeNameSub = await this.profileService.changeName(fullName, password, this.userEmail);
    await setTimeout(() => {
      
      this.changeNameSub.unsubscribe();
      console.log('Unsubscribed from Change Name Subscription');
    }, 1000);
    return;
  } 
  changeNameModal() {
    this.changeNameModalOpen = true;
  }
  closeNameModal() {
    this.changeNameModalOpen = false;
  }





  // 
  changeEmailSub: Subscription;
  changeEmailModalOpen = false;

  /**
   * Attempt to Change the User's Email
   */
  async tryChangeEmail() {
    let newEmail = this.changeEmailForm.controls.newEmail.value;
    let password = this.changeEmailForm.controls.password.value;
    this.changeEmailSub = await this.profileService.changeEmail(newEmail, this.userEmail, password);
    await setTimeout(() => {
      
      this.changeEmailSub.unsubscribe();
      console.log('Unsubscribed from Change Name Subscription');
      return;
    }, 1000);

  }
  changeEmailModal() {
    this.changeEmailModalOpen = true;
  }
  closeEmailModal() {
    this.changeEmailModalOpen = false;
  }






  changePasswordSub: Subscription;
  changePasswordModalOpen = false;

  /**
   * Attempt to Change the User's Password
   */
  async tryChangePassword() {
    let newPassword = this.changePasswordForm.controls.newPassword.value;
    let oldPassword = this.changePasswordForm.controls.oldPassword.value;
    this.changePasswordSub = await this.profileService.changePassword(newPassword, oldPassword, this.userEmail);
    
    await setTimeout(() => {
      
      this.changePasswordSub.unsubscribe();
      console.log('Unsubscribed from Change Password Subscription');
      return;
    }, 1000);
    
  }
  changePasswordModal() {
    this.changePasswordModalOpen = true;
  }
  closePasswordModal() {
    this.changePasswordModalOpen = false;
  }


  //
  changePictureModalOpen = false;
  changePictureSub: Subscription;

  /**
   * Attempt to change User's Picture
   */
  async tryChangePicture() {
    // TODO Crop Photo
    // let newPicture = this.changePictureForm.controls.newPassword.value;
    // this.changePictureSub = await this.profileService.changePassword(newPassword, oldPassword, this.userEmail);
    await setTimeout(() => {
      
      // this.changePictureSub.unsubscribe();
      console.log('Unsubscribed from Change Picture Subscription');
      return;
    }, 1000);
    
  }
  changePictureModal() {
    this.changePictureModalOpen = true;
  }
  closePictureModal() {
    this.changePictureModalOpen = false;
  }




  // 
  newsLetterOpen = false;
  changeNewsLetterSub: Subscription;

  /**
   * User can unsubscribe/subscribe to newsletter.
   */
  tryChangeNewsLetter() {
    // TODO
  }
   changeNewsLetter() {
    this.newsLetterOpen = true;

  }
  closeNewsLetterModal() {
    this.newsLetterOpen = false;
  }





  /**
   * Prompt the user with an Alert, then log the user out
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
