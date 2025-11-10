import { Component } from '@angular/core';
import { ChatBoxComponent } from '../widgets/chat-box/chat-box.component';
import { ChatFilterComponent } from '../widgets/chat-filter/chat-filter.component';
import { CommonSvgIconComponent } from '../../../shared/components/common-svg-icon/common-svg-icon.component';

@Component({
  selector: 'app-group-chat',
  standalone: true,
  imports : [ChatBoxComponent,ChatFilterComponent,CommonSvgIconComponent],
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})

export class GroupChatComponent {

  public isShow : boolean = false;


  public imageData = [
     {
       image: 'assets/images/avtar/16.jpg'
     } ,
     {
      image: 'assets/images/avtar/4.jpg'
    } ,
    {
      image: 'assets/images/avtar/7.jpg'
    } ,
    {
      image: 'assets/images/avtar/11.jpg'
    } ,
    {
      image: 'assets/images/avtar/4.jpg'
    } ,
    {
      image: 'assets/images/blog/comment.jpg'
    } ,
    {
      image: 'assets/images/avtar/7.jpg'
    } ,
  ]

}
