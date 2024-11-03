import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from "../models/news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://127.0.0.1:8000/api/news';

  constructor(private http: HttpClient) {
  }

  getNews(name?: string): Observable<News[]> {
    const url = name ? `${this.apiUrl}?name=${encodeURIComponent(name)}` : this.apiUrl;
    return this.http.get<News[]>(url);
  }

  getNewsById(id: number | string): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  createNews(news: News): Observable<News> {
    return this.http.post<News>(this.apiUrl, news);
  }

  updateNews(newsData: News, id: number | string): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/${id}`, newsData);
  }

  deleteNews(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
