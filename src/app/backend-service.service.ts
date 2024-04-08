import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}
  url_template = 'http://localhost:3000/';
  signUp(data: any): Observable<any> {
    return this.http.post(this.url_template + 'signup', JSON.stringify(data));
  }

  signIn(data: any): Observable<any> {
    return this.http.get('');
  }
}
