import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChairComponent } from './add-chair.component';

describe('AddChairComponent', () => {
  let component: AddChairComponent;
  let fixture: ComponentFixture<AddChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
