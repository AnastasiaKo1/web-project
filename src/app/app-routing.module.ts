import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LoginComponent } from './login/login.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { EditorListComponent } from './editor-list/editor-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'editor-page', component: EditorPageComponent},
  {path: 'editor-list', component: EditorListComponent},
  {path: 'main', component: MainComponent},
  {path: 'category/:path', component: NewsListComponent},
  {path: 'news/:news_id', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
