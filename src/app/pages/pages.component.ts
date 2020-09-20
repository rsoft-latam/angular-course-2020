import {Component} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Store} from '@ngrx/store';
import {OpenSidenav} from './home/store/home.actions';

@Component({
  templateUrl: './pages.component.html'
})

export class PagesComponent {

  constructor(private store: Store<any>,
              private authService: AuthService) {
  }

  public onLogout(): void {
    this.authService.logout();
  }

  onCart(): void {
    this.store.dispatch(OpenSidenav());
  }

}
