import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PetService} from '../shared/services/pet.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';
import { FormPetComponent } from './components/form-pet.component';
import { HeaderPetComponent } from './components/header-pet.component';
import { PetComponent } from './components/pet.component';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    FormPetComponent,
    HeaderPetComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    PetService
  ]
})
export class AdminModule {
}
