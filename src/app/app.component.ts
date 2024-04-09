import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from './backend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private backendservice: BackendServiceService) {}
  title = 'scholarly';
  signed_in = false;
  ngOnInit(): void {
    this.backendservice.updateSignInStatus();
    this.backendservice.signed_in.subscribe({
      next: (isSignedIn: boolean) => {
        this.signed_in = isSignedIn;
      },
    });
  }
}
