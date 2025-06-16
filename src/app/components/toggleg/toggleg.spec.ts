import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggleg } from './toggleg';

describe('Toggleg', () => {
  let component: Toggleg;
  let fixture: ComponentFixture<Toggleg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggleg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toggleg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
