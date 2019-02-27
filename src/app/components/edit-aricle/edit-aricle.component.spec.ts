import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAricleComponent } from './edit-aricle.component';

describe('EditAricleComponent', () => {
  let component: EditAricleComponent;
  let fixture: ComponentFixture<EditAricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
