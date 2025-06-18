import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iffphone } from './iffphone';

describe('Iffphone', () => {
  let component: Iffphone;
  let fixture: ComponentFixture<Iffphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iffphone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iffphone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
