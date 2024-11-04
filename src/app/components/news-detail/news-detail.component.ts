import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from "../../models/news.model";

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
    news: News | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private newsService: NewsService
    ) {
    }

    ngOnInit(): void {
        const newsId = this.route.snapshot.paramMap.get('id');
        if (newsId) {
            this.loadNews(newsId);
        }
    }

    loadNews(id: string) {
        this.newsService.getNewsById(id).subscribe(
            (data: News) => {
                this.news = data;
                this.news.id = id;
            },
            (error) => {
                console.error('Error fetching news detail:', error);
            }
        );
    }

    deleteNews(): void {
        if (this.news && this.news.id !== undefined) {
            if (confirm('Are you sure you want to delete this news item?')) {
                this.newsService.deleteNews(this.news.id).subscribe(() => {
                    this.router.navigate(['/news']);
                });
            }
        } else {
            console.error('News item is not loaded or ID is undefined.');
        }
    }

}
