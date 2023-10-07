import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../src/app/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencyData: any = {};
  errorMessage: string = '';
  usdToUah: number = 0;
  eurToUah: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    const baseCurrency = 'UAH';

    this.currencyService.getCurrencyRates(baseCurrency)
      .subscribe(
        (data) => {
          this.currencyData = data.conversion_rates;
          this.usdToUah = this.currencyData.USD;
          this.eurToUah = this.currencyData.EUR;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = error;
          this.currencyData = {};
          this.usdToUah = 0;
          this.eurToUah = 0;
        }
      );
  }

  getSelectedCurrencyRates() {
    return {
      USD: this.usdToUah,
      EUR: this.eurToUah
    };
  }
}
