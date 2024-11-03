import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];
  filterName: string = '';

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getNews(this.filterName).subscribe(
      (data) => {
        this.newsList = data;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  onFilterChange(): void {
    this.fetchNews();
  }
}
