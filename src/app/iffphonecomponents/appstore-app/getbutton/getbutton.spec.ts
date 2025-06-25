import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getbutton } from './getbutton';

describe('Getbutton', () => {
  let component: Getbutton;
  let fixture: ComponentFixture<Getbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
