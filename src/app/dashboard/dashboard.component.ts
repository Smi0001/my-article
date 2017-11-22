import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfo: any;
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!this.loginService.ifNotLogedInRedirect()) {
      this.getUsers();
    }
  }
  getUsers() {
    this.userService.getUserDetails()
    .then((res) => this.userInfo = res)
    .catch((err) => console.log('No details found : ', err));

  }

  logOut() {
    this.loginService.logOut();
  }
}
