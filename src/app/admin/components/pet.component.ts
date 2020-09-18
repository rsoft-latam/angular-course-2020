import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pet',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{name | uppercase}}</mat-card-title>
      </mat-card-header>
      <img mat-card-image [src]="imageUrl">
      <mat-card-content>
        <p>{{color}}</p>
        <p>{{age}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="onEdit()">Edit</button>
        <button mat-button (click)="onDelete()">Delete</button>
      </mat-card-actions>
    </mat-card>
  `
})

export class PetComponent implements OnInit {

  @Input() name: string;
  @Input() color: string;
  @Input() age: number;
  @Input() imageUrl: string;

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
