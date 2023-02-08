import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    console.log(this.form.value);

  }

  register() { }
}
