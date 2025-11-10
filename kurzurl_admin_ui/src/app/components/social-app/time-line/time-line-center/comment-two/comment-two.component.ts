import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-two',
  standalone:true,
  imports: [FeatherIconsComponent,CommonModule],
  templateUrl: './comment-two.component.html',
  styleUrls: ['./comment-two.component.scss']
})

export class CommentTwoComponent {
  
  public commentTwoData = data.commentTwoData;

}
