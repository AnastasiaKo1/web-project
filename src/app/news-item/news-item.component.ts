import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news
  @Input() status

  public desc: string
  constructor(private rouetr: Router) { }

  ngOnInit(): void {
    this.desc = this.news.text[0].split('.')[0]
  }

  changeDirection(id) {
    this.rouetr.navigate(['news', id])
  }

}
