import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  user: any;
  private credentialsUrl = 'api/credentials';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isLoggedIn() {
    return localStorage.getItem('currentUser') ? true : false;
  }

  ifLoggedInRedirect() {
    if (this.isLoggedIn()) {      
      this.router.navigate(['/dashboard']);
      return true;
    }
  }
  ifNotLogedInRedirect() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return true;
    }
  }
  getUserByUsername(username: string, userArray: any) {
    return userArray.find(user => user.username == username);
  }

  matchPassword(password: string) {
    return this.user.password == password ? true : false;
  }

  successLogin() {
    let currentUser = {
      username: this.user.username,
      sessionid: this.user.sessionid,
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.router.navigate(['/dashboard']);
    this.log('login success');
  }
  
  getUserBylogIn(username: string, password: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.credentialsUrl)
      .subscribe(data => {
        this.user = this.getUserByUsername(username, data);
        if (this.user && this.matchPassword(password)) {
          this.successLogin();
          resolve('success');
        } else {
          reject('error');
        }
      });
    });
     return promise;
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);    
  }

  /* Log a LoginService message */
  private log(message: string) {
    console.log('LoginService: ' + message);
  }
}
