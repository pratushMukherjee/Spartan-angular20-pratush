import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appicon } from './appicon';

describe('Appicon', () => {
  let component: Appicon;
  let fixture: ComponentFixture<Appicon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appicon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appicon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
