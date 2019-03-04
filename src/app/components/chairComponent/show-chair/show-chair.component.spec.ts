import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChairComponent } from './show-chair.component';

describe('ShowChairComponent', () => {
  let component: ShowChairComponent;
  let fixture: ComponentFixture<ShowChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
