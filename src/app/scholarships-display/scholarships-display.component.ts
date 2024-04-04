import { Component } from '@angular/core';
import { Scholarship } from 'src/app/Scholarship.interface';
@Component({
  selector: 'app-scholarships-display',
  templateUrl: './scholarships-display.component.html',
  styleUrls: ['./scholarships-display.component.css'],
})
export class ScholarshipsDisplayComponent {
  scholarships: Scholarship[] = [
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
    {
      name: 'National overseas scholarship',
      organisation: 'Ministry of Social Justice and empowerment',
      date: new Date('2002-09-08'),
      status: 'open',
    },
  ];
}
