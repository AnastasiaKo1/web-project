import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news-list/news-list.component';
import { EventComponent } from './event/event.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsDetailsComponent } from './news-details/news-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryListComponent,
    NewsListComponent,
    EventComponent,
    NewsItemComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
