import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/data/blog/blog';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';

@Component({
  selector: 'app-blog-single',
  standalone:true,
  imports:[BlogCommentComponent],
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})

export class BlogSingleComponent {

  public commentsData = commentsData;


}
