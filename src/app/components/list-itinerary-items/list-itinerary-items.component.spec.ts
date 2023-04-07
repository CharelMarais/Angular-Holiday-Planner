import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItineraryItemsComponent } from './list-itinerary-items.component';

describe('ListItineraryItemsComponent', () => {
  let component: ListItineraryItemsComponent;
  let fixture: ComponentFixture<ListItineraryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItineraryItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItineraryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
