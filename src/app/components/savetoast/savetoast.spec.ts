import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savetoast } from './savetoast';

describe('Savetoast', () => {
  let component: Savetoast;
  let fixture: ComponentFixture<Savetoast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Savetoast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Savetoast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
