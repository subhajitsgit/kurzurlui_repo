import { Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { ProjectListComponent } from './project-list/project-list.component';

export default [
  {
    path: 'list',
    component: ProjectListComponent,
    data: {
      title: 'Project List',
      breadcrumb: 'Project List',
    }
  },
  {
    path: 'create',
    component: CreateNewComponent,
    data: {
      title: 'Project Create',
      breadcrumb: 'Project Create',
    }
  },
] as Routes

