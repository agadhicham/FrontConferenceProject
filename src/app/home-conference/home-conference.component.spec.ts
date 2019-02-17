import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConferenceComponent } from './home-conference.component';

describe('HomeConferenceComponent', () => {
  let component: HomeConferenceComponent;
  let fixture: ComponentFixture<HomeConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
