import { Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { BlogSingleComponent } from "./blog-single/blog-single.component";

export default [
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
    data: {
      title: 'Blog Details',
      breadcrumb: 'Blog Details'
    }
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
    data: {
      title: 'Blog Single',
      breadcrumb: 'Blog Single'
    }
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    data: {
      title: 'Add Post',
      breadcrumb: 'Add Post'
    }
  },
] as Routes;
