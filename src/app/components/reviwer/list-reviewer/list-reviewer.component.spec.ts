import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReviewerComponent } from './list-reviewer.component';

describe('ListReviewerComponent', () => {
  let component: ListReviewerComponent;
  let fixture: ComponentFixture<ListReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
