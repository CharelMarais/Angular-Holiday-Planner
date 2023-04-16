import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagIconDisplayComponent } from './tag-icon-display.component';

describe('TagIconDisplayComponent', () => {
  let component: TagIconDisplayComponent;
  let fixture: ComponentFixture<TagIconDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagIconDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagIconDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
