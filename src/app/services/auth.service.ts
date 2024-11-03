import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://127.0.0.1:8000/api/auth/login';

  constructor(private http: HttpClient) {
  }

  login(credentials: {email: string; password: string}): Observable<any> {
    return this.http.post(this.authUrl, credentials);
  }
}
