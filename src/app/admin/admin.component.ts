import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from '../shared/services/pet.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../shared/services/auth.service';
import {Store} from '@ngrx/store';
import {GetReport} from './store/admin.actions';

@Component({
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, OnDestroy {

  addMode = true;

  vacinnatedPets = [];
  notVacinnatedPets = [];

  formValues: any = {
    name: '',
    urlImage: '',
    color: '',
    age: '',
    vaccinated: ''
  };

  petSubs: Subscription;
  petGetSubs: Subscription;
  petDeleteSubs: Subscription;
  petUpdateSubs: Subscription;
  idEdit: any;

  constructor(private store: Store<any>,
              private authService: AuthService,
              private petService: PetService) {
  }

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.vacinnatedPets = [];
    this.notVacinnatedPets = [];

    this.petGetSubs = this.petService.getPets().subscribe(res => {
      Object.entries(res).map((p: any) => {

        if (p[1].vaccinated) {
          this.vacinnatedPets.push({id: p[0], ...p[1]});
        } else {
          this.notVacinnatedPets.push({id: p[0], ...p[1]});
        }

      });
    });
  }

  onDelete(id: any): void {
    this.petDeleteSubs = this.petService.deletePet(id).subscribe(() => this.loadPets());
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.formValues = product;
  }

  ngOnDestroy(): void {
    this.petSubs ? this.petSubs.unsubscribe() : '';
    this.petGetSubs ? this.petGetSubs.unsubscribe() : '';
    this.petDeleteSubs ? this.petDeleteSubs.unsubscribe() : '';
    this.petUpdateSubs ? this.petUpdateSubs.unsubscribe() : '';
  }


  onSave(data): void {
    if (this.addMode) {
      this.petSubs = this.petService.addPet(data).subscribe(() => this.loadPets());
    } else {
      this.petUpdateSubs = this.petService.updatePet(this.idEdit, data).subscribe(() => this.loadPets());
    }
  }

  onReport(): void {
    this.store.dispatch(GetReport({
      vaccinated: this.vacinnatedPets.length,
      notVaccinated: this.notVacinnatedPets.length
    }));
  }

}
