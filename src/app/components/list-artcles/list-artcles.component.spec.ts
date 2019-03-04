import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtclesComponent } from './list-artcles.component';

describe('ListArtclesComponent', () => {
  let component: ListArtclesComponent;
  let fixture: ComponentFixture<ListArtclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArtclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
