import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['pages']);
    }
  }

  onLogin(form: any): void {
    console.log('FORM: ', form.value);

    this.authService.login({
      email: 'angular@angular.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['admin']);
      },
      err => {
        console.log('LOGIN ERROR: ');
      }
    );
  }

}
