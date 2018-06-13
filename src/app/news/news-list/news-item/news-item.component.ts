import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../news-list.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  imagePath = 'string'
  data;

  constructor(private newsItemService: NewsListService) { 
    this.imagePath = 'assets/media/images/darknet.png';
  }

  ngOnInit() {
  }

}
