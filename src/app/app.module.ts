import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCARDDirective } from './shared/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCARDDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
