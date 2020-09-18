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

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent
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
