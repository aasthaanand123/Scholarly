import { Component } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-custom',
  templateUrl: './navbar-custom.component.html',
  styleUrls: ['./navbar-custom.component.css'],
})
export class NavbarCustomComponent {
  constructor(
    private backendservice: BackendServiceService,
    private router: Router
  ) {}
  loggingOut() {
    this.backendservice.logout();
    this.router.navigate(['/']);
  }
}
