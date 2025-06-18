import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datebutton } from './datebutton';

describe('Datebutton', () => {
  let component: Datebutton;
  let fixture: ComponentFixture<Datebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
