import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registerSuccessModal = false;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])],
      reTypePassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
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
   tryRegister() {
     this.showSuccessModal();
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
     return this.registerSuccessModal = false;
   }

}
