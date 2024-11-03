import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsLoginComponent } from "./components/news-login/news-login.component";
import { NewsListComponent } from "./components/news-list/news-list.component";
import { NewsDetailComponent } from "./components/news-detail/news-detail.component";
import { NewsFormComponent } from "./components/news-form/news-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: NewsLoginComponent },
  { path: 'news', component: NewsListComponent, data: { title: 'News List' } },
  { path: 'news/:id', component: NewsDetailComponent, data: { title: 'News Detail' } },
  { path: 'news-edit/:id', component: NewsFormComponent, data: { title: 'Edit News' } },
  { path: 'news-create', component: NewsFormComponent, data: { title: 'Create News' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
