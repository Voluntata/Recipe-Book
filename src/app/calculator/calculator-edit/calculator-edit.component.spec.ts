import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorEditComponent } from './calculator-edit.component';

describe('CalculatorEditComponent', () => {
  let component: CalculatorEditComponent;
  let fixture: ComponentFixture<CalculatorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
