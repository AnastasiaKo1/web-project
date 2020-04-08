import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {
  public newsList = []
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(data => {
        this.newsList = data
        console.log(this.newsList)
      })
  }

  onDelete(id): void {
    console.log(id)
    this.newsService.delete(id)
  }

}
