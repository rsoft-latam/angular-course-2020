import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pet-form',
  template: `
    <form [formGroup]="petForm" style="display: flex; flex-direction: column; padding: 20px;">
      <p>CREATE/UPDATE</p>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" type="text"></mat-form-field>
      <mat-form-field>
        <mat-label>Color</mat-label>
        <input matInput formControlName="color" type="text"></mat-form-field>
      <mat-form-field>
        <mat-label>Age</mat-label>
        <input matInput formControlName="age" type="number"></mat-form-field>
      <mat-form-field>
        <mat-label>Vaccinated</mat-label>
        <input matInput formControlName="vaccinated" type="text"></mat-form-field>
      <mat-form-field>
        <mat-label>Url Image</mat-label>
        <input matInput formControlName="urlImage" type="text"></mat-form-field>
    </form>
    <button (click)="onSave()">Save</button>
  `
})

export class FormPetComponent implements OnInit, OnChanges {

  petForm: FormGroup;
  @Input() values: any = {
    name: '',
    urlImage: '',
    color: '',
    age: '',
    vaccinated: ''
  };

  @Output() sentForm = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.petForm = this.formBuilder.group({
      name: this.values.name,
      urlImage: this.values.urlImage,
      color: this.values.color,
      age: this.values.age,
      vaccinated: this.values.vaccinated
    });

  }

  onSave(): void {
    this.sentForm.emit(this.petForm.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.values && this.petForm) {
      this.petForm.patchValue(this.values);
    }
  }

}
