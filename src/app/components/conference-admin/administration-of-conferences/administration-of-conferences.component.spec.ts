import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationOfConferencesComponent } from './administration-of-conferences.component';

describe('AdministrationOfConferencesComponent', () => {
  let component: AdministrationOfConferencesComponent;
  let fixture: ComponentFixture<AdministrationOfConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationOfConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationOfConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
