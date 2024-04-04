import { Component, Input } from '@angular/core';
import { Scholarship } from 'src/app/Scholarship.interface';
@Component({
  selector: 'app-scholarship-card',
  templateUrl: './scholarship-card.component.html',
  styleUrls: ['./scholarship-card.component.css'],
})
export class ScholarshipCardComponent {
  @Input() scholarship: Scholarship = {
    organisation: '',
    name: '',
    date: new Date(),
    status: '',
  };
  @Input() index: number = 0;
}
