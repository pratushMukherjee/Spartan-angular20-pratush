import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poloraplh } from './poloraplh';

describe('Poloraplh', () => {
  let component: Poloraplh;
  let fixture: ComponentFixture<Poloraplh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poloraplh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poloraplh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
