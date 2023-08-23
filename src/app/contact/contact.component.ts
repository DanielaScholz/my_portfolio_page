import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
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

  // nameError = false;
  // emailError = false;
  // messageError = false;

  nameFormControl = new FormControl('', [Validators.required])
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  messageFormControl = new FormControl('', [Validators.required])
  matcher = new MyErrorStateMatcher();

  // checkInput() {
  //   let name = this.nameField.nativeElement;
  //   let email = this.emailField.nativeElement;
  //   let message = this.messageField.nativeElement;

  //   if (name.value == '') {
  //     this.nameError = true;
  //   }

  //    if (email.value == '') {
  //     this.emailError = true;
  //   }

  //    if (message.value == '') {
  //     this.messageError = true;
  //   }

  //   else if (name.length >1 && email.length > 1 && message.length >1) {
  //     this.submitForm();
  //     console.log('submitted form')
  //   } 
  // }

  async submitForm() {
    console.log(this.contactForm);
    let name = this.nameField.nativeElement;
    let email = this.emailField.nativeElement;
    let message = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    console.log(email.value);

    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    sendBtn.disabled = true;

    //Animation anzeigen die getriggert wird!

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('email', email.value);
    fd.append('message', message.value);

    //senden
    await fetch('https://daniela-scholz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    //Nachricht - erfolgreiche sendung einfügen

    name.disabled = false;
    email.disabled = false;
    message.disabled = false;
    sendBtn.disabled = false;

    name.value = '';
    email.value = '';
    message.value = '';
    sendBtn.value = '';
  }
}










