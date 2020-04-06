import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/assets/interfaces/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "assets/data/category.json"

  constructor(private http: HttpClient) { }
  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this._url)
  }
}
