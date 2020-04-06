import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public randNews = []
  public news = []
  public latestNews = []
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(data => {
        this.randNews = data.sort(() => Math.random() - 0.5)
        this.news = this.randNews.slice(0,3)
        this.latestNews = data
      })
  }
}
