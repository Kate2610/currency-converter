import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = 'd02e16d577a10828a332d518'; 
  private baseUrl = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) {}

  getCurrencyRates(baseCurrency: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${this.apiKey}/latest/${baseCurrency}`;
    return this.http.get(apiUrl);
  }
}
