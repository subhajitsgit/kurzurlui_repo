import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-one',
  standalone:true,
  imports: [FeatherIconsComponent,CommonModule],
  templateUrl: './comment-one.component.html',
  styleUrls: ['./comment-one.component.scss']
})

export class CommentOneComponent {

  public commentOneData = data.commentOneData;

}
