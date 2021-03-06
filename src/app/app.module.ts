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
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LoginComponent } from './login/login.component';
import { EditorPageComponent } from './editor-page/editor-page.component'
import { FormsModule } from '@angular/forms';
import { EditorListComponent } from './editor-list/editor-list.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryListComponent,
    NewsListComponent,
    EventComponent,
    NewsItemComponent,
    NewsDetailsComponent,
    LoginComponent,
    EditorPageComponent,
    EditorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
