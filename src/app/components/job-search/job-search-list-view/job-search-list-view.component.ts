import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-search-list-view',
  standalone: true,
  imports: [JobFilterComponent,NgbRatingModule,CommonModule],
  templateUrl: './job-search-list-view.component.html',
  styleUrls: ['./job-search-list-view.component.scss']
})

export class JobSearchListViewComponent {

  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
