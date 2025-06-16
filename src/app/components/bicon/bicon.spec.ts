import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bicon } from './bicon';

describe('Bicon', () => {
  let component: Bicon;
  let fixture: ComponentFixture<Bicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
