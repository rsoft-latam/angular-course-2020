import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../shared/services/product.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormPetComponent } from './components/form-pet/form-pet.component';
import { HeaderPetComponent } from './components/header-pet/header-pet.component';
import { PetComponent } from './components/pet/pet.component';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
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
    ProductService
  ]
})
export class AdminModule {
}
