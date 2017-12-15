import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadrzajFormaComponent } from './sadrzaj-forma.component';

describe('SadrzajFormaComponent', () => {
  let component: SadrzajFormaComponent;
  let fixture: ComponentFixture<SadrzajFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadrzajFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadrzajFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
