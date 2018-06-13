import { Component, OnInit } from '@angular/core';
import { NewsListService } from './news-list.service';
import { Subscription } from 'rxjs';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

  news;
  subscription: Subscription;

  constructor(private newsListService: NewsListService ) {
    this.newsListService.newsData.subscribe((data) => {
      this.news = data;
    })
  }

  ngOnInit() {
    // this.newsListService.newsData.subscribe((data) => {
    //     this.news = data;
    //     console.log(data);
    // })
  }

}
