import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPresentationComponent } from './show-presentation.component';

describe('ShowPresentationComponent', () => {
  let component: ShowPresentationComponent;
  let fixture: ComponentFixture<ShowPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
