import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatotekeFormaComponent } from './datoteke-forma.component';

describe('DatotekeFormaComponent', () => {
  let component: DatotekeFormaComponent;
  let fixture: ComponentFixture<DatotekeFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatotekeFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatotekeFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
