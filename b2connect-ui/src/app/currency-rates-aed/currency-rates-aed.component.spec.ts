import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRatesAedComponent } from './currency-rates-aed.component';

describe('CurrencyRatesAedComponent', () => {
  let component: CurrencyRatesAedComponent;
  let fixture: ComponentFixture<CurrencyRatesAedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyRatesAedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRatesAedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
