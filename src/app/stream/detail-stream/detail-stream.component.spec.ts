import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStreamComponent } from './detail-stream.component';

describe('DetailStreamComponent', () => {
  let component: DetailStreamComponent;
  let fixture: ComponentFixture<DetailStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
