import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './components/persona/persona.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonaComponent
  ],
  exports: [
    PersonaComponent
  ]
})

export class PersonaModule { }