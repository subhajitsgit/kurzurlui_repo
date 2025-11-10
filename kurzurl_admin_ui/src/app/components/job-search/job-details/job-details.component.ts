import { Component } from '@angular/core';
import { jobCardsData, jobDetail } from '../../../shared/data/data/job-search/job-search';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone:true,
  imports:[JobFilterComponent,NgbRatingModule,CommonModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent {

  public jobDetail = jobDetail;
  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
