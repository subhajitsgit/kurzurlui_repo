import { Component } from '@angular/core';
import { CommentOneComponent } from './comment-one/comment-one.component';
import { CommentTwoComponent } from './comment-two/comment-two.component';

@Component({
  selector: 'app-time-line-center',
  standalone:true,
  imports: [CommentOneComponent,CommentTwoComponent],
  templateUrl: './time-line-center.component.html',
  styleUrls: ['./time-line-center.component.scss']
})
export class TimeLineCenterComponent {

}
