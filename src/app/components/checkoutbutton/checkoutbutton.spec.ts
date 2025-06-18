import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkoutbutton } from './checkoutbutton';

describe('Checkoutbutton', () => {
  let component: Checkoutbutton;
  let fixture: ComponentFixture<Checkoutbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkoutbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkoutbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
