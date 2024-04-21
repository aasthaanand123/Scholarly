import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/backend-service.service';
@Component({
  selector: 'app-individual-scholarship-details',
  templateUrl: './individual-scholarship-details.component.html',
  styleUrls: ['./individual-scholarship-details.component.css'],
})
export class IndividualScholarshipDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private backendservice: BackendServiceService,
    private router: Router
  ) {}
  heading = '';
  scholarshipData = {
    heading: '',
    description: '',
    markers: '',
    link: '',
    status: '',
    imgUrl: '',
    overview: [],
  };
  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        this.heading = params['heading'];
      },
    });
    this.backendservice.scholarship.subscribe({
      next: (data) => {
        this.scholarshipData = data;
      },
    });
  }
  backtoScholarships() {
    this.router.navigate(['/all-scholarships']);
  }
}
