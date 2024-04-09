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

  getUserData(): Observable<any> {
    let token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Jwt token not found!');
    }
    const header_token = new HttpHeaders({
      Authorization: 'Bearer ' + token, //bearer token(access token) in the authorization header
    });
    return this.http.post(
      this.url_template + 'user-info',
      {},
      {
        headers: header_token,
      }
    );
  }
}
