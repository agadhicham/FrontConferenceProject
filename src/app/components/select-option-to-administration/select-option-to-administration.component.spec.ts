import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionToAdministrationComponent } from './select-option-to-administration.component';

describe('SelectOptionToAdministrationComponent', () => {
  let component: SelectOptionToAdministrationComponent;
  let fixture: ComponentFixture<SelectOptionToAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionToAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionToAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
