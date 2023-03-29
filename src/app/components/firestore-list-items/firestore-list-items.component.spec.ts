import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreListItemsComponent } from './firestore-list-items.component';

describe('FirestoreListItemsComponent', () => {
  let component: FirestoreListItemsComponent;
  let fixture: ComponentFixture<FirestoreListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestoreListItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirestoreListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
