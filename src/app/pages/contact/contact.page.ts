import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  successModalOpen = false;

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
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  // Send Message
  /**
   * Send message to server. If there is a 200 repsonse / success,
   * show success modal.
   * TODO: Email or Admin Inbox
   * @param fullName of user sending message
   * @param email of user sending message
   * @param message of user sending message
   * @return boolean / to show modal or error message
   */
  submitContactForm(fullName: string, email: string, message: string) {
    // TODO: Figure out if Email or Admin Inbox method
  }

  // Show Modal
  /**
   * If the message is sent successfully with a 200 Response,
   * present this modal.
   */
   showSuccessModal() {
    this.successModalOpen = true;
    setTimeout(() => {
      // TODO: Clear contactForm
      return this.successModalOpen = false;
    }, 3000);
  }

  // Submit Error Message
  /**
   * If the network request fails for any reason why use attemtps
   * to submit message, show alert.
   * @param msg Message to display to the user in the alert
   */
  async errorAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

  // Cancel
  cancel() {
    this.router.navigateByUrl('/landing')
  }

}
