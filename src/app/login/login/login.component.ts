import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  sw = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log('USENAME: ', this.username);
    console.log('PASSWORD: ', this.password);
  }

  onLogin2(form): void {
    console.log('VARIABLE LOCAL FORM: ', form.value);
    this.router.navigate(['/pages']);
  }

}
