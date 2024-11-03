import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  newsForm: FormGroup;
  news: News = new News();
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.newsForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.newsService.getNewsById(id).subscribe((news) => {
        this.newsForm.patchValue(news);
      });
    }
  }

  loadNews(id: string) {
    this.newsService.getNewsById(id).subscribe(data => {
      this.news = data;
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      const newsId = this.route.snapshot.paramMap.get('id');
      if (newsId) {
        this.newsService.updateNews(this.newsForm.value, newsId).subscribe(() => {
          this.router.navigate(['/news']);
        });
      }
    } else {
      this.newsService.createNews(this.newsForm.value).subscribe(() => {
        this.router.navigate(['/news']);
      });
    }
  }

}
