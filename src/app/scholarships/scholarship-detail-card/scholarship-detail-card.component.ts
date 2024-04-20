import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scholarship-detail-card',
  templateUrl: './scholarship-detail-card.component.html',
  styleUrls: ['./scholarship-detail-card.component.css'],
})
export class ScholarshipDetailCardComponent {
  constructor(private router: Router) {}
  @Input() scholarshipData = {
    heading: '',
    content: '',
    links: '',
    img_url: '',
  };
  open_data(heading: string) {
    //send a request to scrape the scholarship information from scholarshipforme.com
    this.router.navigate(['/individual-data']); //send some data in form of query
  }
}
