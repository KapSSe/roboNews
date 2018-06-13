import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CheckoutModule,
    HomeModule,
    NewsModule
  ],
  providers: [UserService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
