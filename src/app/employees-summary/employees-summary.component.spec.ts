import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSummaryComponent } from './employees-summary.component';

describe('EmployeesSummaryComponent', () => {
  let component: EmployeesSummaryComponent;
  let fixture: ComponentFixture<EmployeesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
