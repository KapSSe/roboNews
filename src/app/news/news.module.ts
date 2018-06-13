import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';

import { NewsListService } from './news-list/news-list.service';
import { NewsItemService } from './news-list/news-item/news-item.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsListComponent, NewsItemComponent],
  providers: [NewsListService, NewsItemService],
  exports: [NewsListComponent]
})
export class NewsModule { }
