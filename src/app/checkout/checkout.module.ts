import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout-page/checkout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }
