import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}
  url_template = 'http://localhost:3000/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  signUp(data: any): Observable<any> {
    return this.http.post(this.url_template + 'sign-up', JSON.stringify(data), {
      headers: this.headers,
    });
  }

  signIn(data: any): Observable<any> {
    return this.http.post(this.url_template + 'sign-in', JSON.stringify(data), {
      headers: this.headers,
    });
  }
}
