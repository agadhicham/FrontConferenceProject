import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConfernceUserComponent } from './show-confernce-user.component';

describe('ShowConfernceUserComponent', () => {
  let component: ShowConfernceUserComponent;
  let fixture: ComponentFixture<ShowConfernceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConfernceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConfernceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
