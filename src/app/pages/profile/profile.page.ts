import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  changeNameForm: FormGroup;
  changeEmailForm: FormGroup;
  changePasswordForm: FormGroup;
  newsLetterForm: FormGroup;
  changeNameModalOpen = false;
  changeEmailModalOpen = false;
  changePasswordModalOpen = false;
  newsLetterOpen = false;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'password', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController) { 
      
    }

  ngOnInit() {
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

  /**
   * Open Change Name Modal
   */
  changeName(email: string) {
    this.changeNameModalOpen = true;
  }
  /**
   * Close Change Name Modal
   */
  closeNameModal() {
    this.changeNameModalOpen = false;
  }
  /**
   * Uptate User's Name
   */
   updateName() {
    this.changeNameModalOpen = false;
  }

  /**
   * Change User's Email in Profile
   */
   changeEmail(email: string) {
    this.changeEmailModalOpen = true;

  }
  /**
   * Close Change Email Modal
   */
  closeEmailModal() {
    this.changeEmailModalOpen = false;
  }

  /**
   * Change User's Password in Profile
   */
   changePassword(email: string) {
    this.changePasswordModalOpen = true;

  }
  /**
   * Close Change Password Modal
   */
  closePasswordModal() {
    this.changePasswordModalOpen = false;
  }

  /**
   * User can unsubscribe/subscribe to newsletter.
   */
   newsLetter(email: string) {
    this.newsLetterOpen = true;

  }
  /**
   * Close News Letter Modal
   */
  closeNewsLetterModal() {
    this.newsLetterOpen = false;
  }

}
