import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from 'src/assets/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url: string = "assets/data/news.json"
  constructor(private http: HttpClient) { }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url)
  }
}
