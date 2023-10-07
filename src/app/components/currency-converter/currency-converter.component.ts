import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service'; 

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
  
export class CurrencyConverterComponent implements OnInit {
  amount1: number = 0; 
  fromCurrency1: string = 'USD'; 
  convertedAmount2: number = 0; 

  amount2: number = 0; 
  fromCurrency2: string = 'UAH'; 
  convertedAmount1: number = 0; 

  currencies: string[] = ['UAH', 'USD', 'EUR']; 

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.convertCurrency();
  }

 
  convertCurrency1To2() {
    this.currencyService.getCurrencyRates(this.fromCurrency1).subscribe((data: any) => {
      const exchangeRate = data.conversion_rates[this.fromCurrency2];
      if (exchangeRate) {
        this.convertedAmount2 = this.amount1 * exchangeRate;
      } else {
        this.convertedAmount2 = 0;
      }
    });
  }

 
  convertCurrency2To1() {
    this.currencyService.getCurrencyRates(this.fromCurrency2).subscribe((data: any) => {
      const exchangeRate = data.conversion_rates[this.fromCurrency1];
      if (exchangeRate) {
        this.convertedAmount1 = this.amount2 * exchangeRate;
      } else {
        this.convertedAmount1 = 0;
      }
    });
  }

  convertCurrency() {
    this.convertCurrency1To2();
    this.convertCurrency2To1();
  }
}
