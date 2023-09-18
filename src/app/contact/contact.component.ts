import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  @ViewChild('submitMsg') submitMsg!: ElementRef;

  nameFormControl = new FormControl('', [Validators.required])
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  messageFormControl = new FormControl('', [Validators.required])
  matcher = new MyErrorStateMatcher();

  async submitForm() {
    console.log(this.contactForm);
    let name = this.nameField.nativeElement;
    let email = this.emailField.nativeElement;
    let message = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    let submitMsg = this.submitMsg.nativeElement;

    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    sendBtn.disabled = true;

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('email', email.value);
    fd.append('message', message.value);

    try {
      const response = await fetch('https://daniela-scholz.at/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      if (response.ok) {
        submitMsg.textContent = 'E-Mail erfolgreich gesendet!';
        this.fadeInOutSubmitMsg();
      } else {
        // Fehlerhafte Antwort vom Server
        submitMsg.textContent = 'E-Mail konnte nicht gesendet werden, bitte erneut versuchen!'
        this.fadeInOutSubmitMsg();
      }
    } catch (error) {
      // Fehler beim Senden der Anfrage
      console.error('Fehler beim Senden der Anfrage:', error);
      submitMsg.textContent = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      this.fadeInOutSubmitMsg();
    }

    name.disabled = false;
    email.disabled = false;
    message.disabled = false;
    sendBtn.disabled = false;

    name.value = '';
    email.value = '';
    message.value = '';
    sendBtn.value = '';
  }

  fadeInOutSubmitMsg() {
    let submitMsg = this.submitMsg.nativeElement;
    submitMsg.classList.add('visible');
    submitMsg.classList.remove('hide');
    setTimeout(() => {  
      submitMsg.classList.remove('visible');
    }, 3000);
    setTimeout(() => {
      submitMsg.classList.add('hide');
    }, 6000);

  }
}











