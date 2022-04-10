import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphSeedService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrencyRates = () => {
    return this.http.get(`http://localhost:5500/currencyRates/USD`);
  }

  public getCurrencyRatesByAED = () => {
    return this.http.get(`http://localhost:5500/currencyRates/AED`);
  }

}
