import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfo: any;
  activityList: any;

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!this.loginService.ifNotLogedInRedirect()) {
      this.getUser();
    }
  }
  getUser() {
    this.userService.getUserDetails()
    .then((res) => {
      console.log(res);
      this.userInfo = res;
      this.getActivityList();
    })
    .catch((err) => console.log('No details found : ', err));
  }

  logOut() {
    this.loginService.logOut();
  }
  getActivityList() {
    // static activity data
    this.activityList = [
        {
          id: 1,
          title: 'new article',
          createdTime: 1518982022797,
          updatedTime: 1518982025797
        },
        {
          id: 2,
          title: 'Article 2',
          createdTime: 1508982022797,
          updatedTime: 1518982035797
        }
      ];

    // $('#activityList').DataTable({
    //   'ajax': function (data, callback, settings) { callback(activityList); },
    //   'columns': [
    //     { 'data': 'title' },
    //     { 'data': 'updatedTime' }
    //   ],
    //   'order': [[1, 'asc']]
    // });
  }
}
