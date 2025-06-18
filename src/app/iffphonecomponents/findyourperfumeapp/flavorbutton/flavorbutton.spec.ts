import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flavorbutton } from './flavorbutton';

describe('Flavorbutton', () => {
  let component: Flavorbutton;
  let fixture: ComponentFixture<Flavorbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flavorbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flavorbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
