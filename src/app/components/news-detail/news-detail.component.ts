import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  news: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {
  }

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    if (newsId) {
      this.newsService.getNewsById(newsId).subscribe(
        (data) => {
          this.news = data;
        },
        (error) => {
          console.error('Error fetching news detail:', error);
        }
      );
    }
  }

  loadNews(id: string) {
    this.newsService.getNewsById(id).subscribe(data => {
      this.news = data;
    });
  }

  deleteNews(): void {
    if (confirm('Are you sure you want to delete this news item?')) {
      this.newsService.deleteNews(this.news.id).subscribe(() => {
        this.router.navigate(['/news']);
      });
    }
  }

}
