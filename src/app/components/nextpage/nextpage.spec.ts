import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nextpage } from './nextpage';

describe('Nextpage', () => {
  let component: Nextpage;
  let fixture: ComponentFixture<Nextpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nextpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nextpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
