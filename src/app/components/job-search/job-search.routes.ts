import { Routes } from '@angular/router';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobSearchCardViewComponent } from './job-search-card-view/job-search-card-view.component';
import { JobSearchListViewComponent } from './job-search-list-view/job-search-list-view.component';

export default [
  {
    path: 'cards-view',
    component: JobSearchCardViewComponent,
    data: {
      title: 'Cards View',
      breadcrumb: 'Cards View',
    }
  },
  {
    path: 'list-view',
    component: JobSearchListViewComponent,
    data: {
      title: 'List View',
      breadcrumb: 'List View',
    }
  },
  {
    path: 'job-details',
    component: JobDetailsComponent,
    data: {
      title: 'Job Details',
      breadcrumb: 'Job Details',
    }
  },
  {
    path: 'apply',
    component: JobApplyComponent,
    data: {
      title: 'Apply',
      breadcrumb: 'Apply',
    }
  },
] as Routes

