import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanoviFormaComponent } from './clanovi-forma.component';

describe('ClanoviFormaComponent', () => {
  let component: ClanoviFormaComponent;
  let fixture: ComponentFixture<ClanoviFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanoviFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanoviFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
