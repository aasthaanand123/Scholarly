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
  applied = false;
  saved = false;
  statusApplied = 'Not Applied';
  SaveStatus = 'Not Saved';
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
    //get from database, whether applied scholarship or not
    //get from database, whether saved or not
  }
  backtoScholarships() {
    this.router.navigate(['/all-scholarships']);
  }
  updateStatus(title: any) {
    //toggle applied and text
    this.applied = !this.applied;
    if (this.statusApplied == 'Not Applied') this.statusApplied = 'Applied';
    else this.statusApplied = 'Not Applied';
    //save changes in database
  }
  updateSaveStatus(title: any) {
    this.saved = !this.saved;
    if (this.SaveStatus == 'Not Saved') this.SaveStatus = 'Saved';
    else this.SaveStatus = 'Not Saved';
  }
}
