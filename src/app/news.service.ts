import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from 'src/assets/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url: string = "assets/data/news.json"
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url)
  }

  create(article): Observable<INews> {
    return this.http.post<INews>(this._url, article, this.httpHeaders)
  }

  delete(id: string): Observable<INews> {
    return this.http.delete<INews>(this._url + '/id')
  }
}
