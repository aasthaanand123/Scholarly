import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../Scholarship.interface';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css'],
})
export class LandingMainComponent implements OnInit {
  constructor(private http: HttpClient) {}
  popular: any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/getPopular').subscribe({
      next: (response) => {
        this.popular = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
