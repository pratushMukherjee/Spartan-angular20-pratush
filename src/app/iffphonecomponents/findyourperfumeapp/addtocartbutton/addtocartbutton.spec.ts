import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtocartbutton } from './addtocartbutton';

describe('Addtocartbutton', () => {
  let component: Addtocartbutton;
  let fixture: ComponentFixture<Addtocartbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addtocartbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addtocartbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
