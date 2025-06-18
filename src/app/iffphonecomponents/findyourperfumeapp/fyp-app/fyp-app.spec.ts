import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FypApp } from './fyp-app';

describe('FypApp', () => {
  let component: FypApp;
  let fixture: ComponentFixture<FypApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FypApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FypApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
