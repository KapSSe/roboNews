import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoPath: string;

  constructor() { 
    this.logoPath = 'assets/media/images/logo.svg';
  }

  ngOnInit() {


  }

}
