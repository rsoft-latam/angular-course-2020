import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './components/persona/persona.component';
import {TestComponent} from '../../../../components/TestComponent';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PersonaComponent,
    TestComponent
  ],
  exports: [
    PersonaComponent
  ]
})

export class PersonaModule { }