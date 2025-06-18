import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generatebutton } from './generatebutton';

describe('Generatebutton', () => {
  let component: Generatebutton;
  let fixture: ComponentFixture<Generatebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generatebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generatebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
