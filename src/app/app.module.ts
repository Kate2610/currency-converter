import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyService } from '../app/services/currency.service';
import { HeaderComponent } from './components/header/header.component';
import { CurrencyConverterComponent} from './components/currency-converter/currency-converter.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CurrencyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
