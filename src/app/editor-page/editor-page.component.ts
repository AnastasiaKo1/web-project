import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  newsInfo = {
    id: '',
    title: '',
    category: '',
    image: '',
    text: []
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.newsInfo)
    this.newsService.create(this.newsInfo)
  }
}
