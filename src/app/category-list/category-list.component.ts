import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories = []
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.categories = data.map(item => {
          return {
            path: encodeURI(item.name),
            name: item.name.toLowerCase()
          }
        })
      })
  }

}
