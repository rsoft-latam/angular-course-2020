import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPetComponent } from './header-pet.component';

describe('HeaderPetComponent', () => {
  let component: HeaderPetComponent;
  let fixture: ComponentFixture<HeaderPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
