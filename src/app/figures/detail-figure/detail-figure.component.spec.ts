import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFigureComponent } from './detail-figure.component';

describe('DetailFigureComponent', () => {
  let component: DetailFigureComponent;
  let fixture: ComponentFixture<DetailFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
