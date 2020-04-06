import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  public news
  public id = this.route.snapshot.paramMap.get('news_id')
  public text = []
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(data => {
        this.news = data.find(o => o.id == this.id)
        this.text = this.news.text
      })
  }

}
