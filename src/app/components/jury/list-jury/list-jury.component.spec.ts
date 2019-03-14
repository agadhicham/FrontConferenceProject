import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJuryComponent } from './list-jury.component';

describe('ListJuryComponent', () => {
  let component: ListJuryComponent;
  let fixture: ComponentFixture<ListJuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
