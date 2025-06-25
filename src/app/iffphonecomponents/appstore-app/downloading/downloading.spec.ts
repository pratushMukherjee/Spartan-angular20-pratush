import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Downloading } from './downloading';

describe('Downloading', () => {
  let component: Downloading;
  let fixture: ComponentFixture<Downloading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Downloading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Downloading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
