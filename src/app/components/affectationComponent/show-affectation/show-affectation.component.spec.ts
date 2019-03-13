import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAffectationComponent } from './show-affectation.component';

describe('ShowAffectationComponent', () => {
  let component: ShowAffectationComponent;
  let fixture: ComponentFixture<ShowAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
