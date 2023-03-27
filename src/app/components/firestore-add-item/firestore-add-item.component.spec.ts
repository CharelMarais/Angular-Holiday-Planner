import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreAddItemComponent } from './firestore-add-item.component';

describe('FirestoreAddItemComponent', () => {
  let component: FirestoreAddItemComponent;
  let fixture: ComponentFixture<FirestoreAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestoreAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirestoreAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
