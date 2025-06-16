import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablep } from './tablep';

describe('Tablep', () => {
  let component: Tablep;
  let fixture: ComponentFixture<Tablep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
