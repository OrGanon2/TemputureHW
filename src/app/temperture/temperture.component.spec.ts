import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempertureComponent } from './temperture.component';

describe('TempertureComponent', () => {
  let component: TempertureComponent;
  let fixture: ComponentFixture<TempertureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempertureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
