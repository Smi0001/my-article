import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors = {error: false, text: 'Username-Password mismatch'};
  
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.errors.error = false;
    this.loginService.ifLoggedInRedirect();
  }

  onSubmit(loginForm: NgForm) {
    this.errors.error = false;
    let u = loginForm.form.value.username;
    let p = loginForm.form.value.password;
    this.loginService.getUserBylogIn(u,p)
    .then((res) => console.log('response: ', res))
    .catch(() => this.errors.error = true);
  }
  
}
