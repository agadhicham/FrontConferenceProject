import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAffectationsComponent } from './list-affectations.component';

describe('ListAffectationsComponent', () => {
  let component: ListAffectationsComponent;
  let fixture: ComponentFixture<ListAffectationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAffectationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAffectationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
