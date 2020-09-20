import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email = 'angular@angular.com';
  password = '123456';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['pages']);
    }
  }

  onLogin(form: any): void {
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(() => this.router.navigate(['pages']));
  }

}
