import { Component } from '@angular/core';
import { jobCardsData } from '../../../shared/data/data/job-search/job-search';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-job-search-card-view',
  standalone: true,
  imports: [JobFilterComponent,NgbRatingModule],
  templateUrl: './job-search-card-view.component.html',
  styleUrls: ['./job-search-card-view.component.scss']
})

export class JobSearchCardViewComponent {

  public jobCardsData = jobCardsData;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
