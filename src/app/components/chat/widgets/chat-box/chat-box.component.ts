import { Component } from '@angular/core';
import * as data from '../.././../../shared/data/data/chat/chat';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { CommonSvgIconComponent } from '../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-box',
  standalone : true,
  imports:[FeatherIconsComponent,CommonSvgIconComponent,CommonModule],
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})

export class ChatBoxComponent {

  public chatData = data.massage;
  public isShow : boolean = false;
  public showEmojiPicker:boolean = false;

}
