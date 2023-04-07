import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItineraryItemComponent } from './add-itinerary-item.component';

describe('AddItineraryItemComponent', () => {
  let component: AddItineraryItemComponent;
  let fixture: ComponentFixture<AddItineraryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItineraryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItineraryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
