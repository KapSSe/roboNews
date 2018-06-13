import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private newsDataSourse = new BehaviorSubject<any>(undefined);
          newsData = this.newsDataSourse.asObservable();

  constructor(private httpClient: HttpClient) {
    console.log(1);
    this.httpClient.get('http://localhost:3000/posts').subscribe((data) => {
        console.log(2);
        this.newsDataSourse.next(data);
    })
  }
  
}
