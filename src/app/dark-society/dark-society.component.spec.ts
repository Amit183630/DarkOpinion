import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSocietyComponent } from './dark-society.component';

describe('DarkSocietyComponent', () => {
  let component: DarkSocietyComponent;
  let fixture: ComponentFixture<DarkSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
