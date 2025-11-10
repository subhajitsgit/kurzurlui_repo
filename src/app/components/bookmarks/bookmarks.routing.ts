import { Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark.component';

export default [
  {
    path: '',
    component: BookmarkComponent,
    data: {
      title: "Bookmarks",
      breadcrumb: "Bookmarks",
    }
  }

] as Routes;

