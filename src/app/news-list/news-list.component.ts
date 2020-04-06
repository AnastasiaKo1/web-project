import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public newsList = []
  public categoryName
  public categoryAmount
  constructor(private newsService: NewsService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(route => {
      this.newsService.getNews()
      .subscribe(data => {
        this.newsList = data.filter(o => o.category == decodeURI(route.path).toLowerCase())
        this.categoryName = decodeURI(route.path).toLowerCase()
        this.categoryAmount = this.newsList.length
      })
    })
    
  }

}
