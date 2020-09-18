import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'header-pet',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">VETRINARY</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <span>vacinnatedPets: {{vacinnated}}</span>
        <span>notVacinnatedPets: {{notVacinnated}}</span>
        <span></span>
        <button (click)="onLogout()">LOGOUT</button>
      </div>
    </nav>
  `
})

export class HeaderPetComponent implements OnInit {

  adminSubs: Subscription;

  vacinnated = 0;
  notVacinnated = 0;

  constructor(private store: Store<any>,
              private authService: AuthService) {
  }

  public ngOnInit(): void {

    this.adminSubs = this.store.select(s => s.admin).subscribe(res => {
      this.vacinnated = res.vaccinated;
      this.notVacinnated = res.notVaccinated;
    });

  }

  public onLogout(): void {
    this.authService.logout();
  }
}
