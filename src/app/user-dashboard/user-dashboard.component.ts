import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private backendService: BackendServiceService) {}
  user_data: any;
  ngOnInit(): void {
    this.backendService.getUserData().subscribe({
      next: (response) => {
        this.user_data = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
