import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../navbar/navbar.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.hide = true;
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
