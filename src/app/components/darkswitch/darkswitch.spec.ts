import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Darkswitch } from './darkswitch';

describe('Darkswitch', () => {
  let component: Darkswitch;
  let fixture: ComponentFixture<Darkswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Darkswitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Darkswitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
