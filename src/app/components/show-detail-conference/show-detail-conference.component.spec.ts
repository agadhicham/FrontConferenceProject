import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailConferenceComponent } from './show-detail-conference.component';

describe('ShowDetailConferenceComponent', () => {
  let component: ShowDetailConferenceComponent;
  let fixture: ComponentFixture<ShowDetailConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
