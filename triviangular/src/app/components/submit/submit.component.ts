import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {
  form = new FormGroup({
    nickname: new FormControl('nickname', [Validators.required, Validators.min(1)]), // A non-empty nickname.
    email: new FormControl('email@doamin.tld', [Validators.required, Validators.email]), // A valid e-mail-address.
    age: new FormControl(69, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(13)]), // An age of at least 13.
    country: new FormControl('country'), // A country name, which is the only optional field in this form.
    accept: new FormControl(true, [Validators.required, Validators.requiredTrue]), // A consent-checkbox that must be checked.
  })

  onSend() {
    console.log("onSend called");

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
