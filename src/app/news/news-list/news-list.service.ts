import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  private newsDataSourse = new BehaviorSubject<any>(undefined);
          newsData = this.newsDataSourse.asObservable();

  constructor(private dataService: DataService) { 
    dataService.newsData.subscribe((data)=> {
      this.newsDataSourse.next(data)
    });
  }

}
