import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homepage/home.component';
import { HeaderComponent } from './homepage/header/header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HomeComponent, HeaderComponent],
  exports: [HomeComponent]
})

export class HomeModule { }
