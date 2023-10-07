import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdToUah: number = 0;
  eurToUah: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getCurrencyRates('UAH')
      .subscribe(
        (data) => {
          this.usdToUah = data.conversion_rates.USD;
          this.eurToUah = data.conversion_rates.EUR;
        },
        (error) => {
          console.error('Error fetching currency rates', error);
        }
      );
  }
}
