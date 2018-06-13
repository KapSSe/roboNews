import { Injectable, OnInit } from '@angular/core';
import { NewsListService } from '../news-list.service';

@Injectable({
  providedIn: 'root'
})
export class NewsItemService implements OnInit {

  newsList

  constructor(private newsListService: NewsListService) { 
  }

  ngOnInit() {
    this.newsList = this.newsListService;
  }


}
