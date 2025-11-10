import { Component } from '@angular/core';
import { CommonSvgIconComponent } from '../../../shared/components/common-svg-icon/common-svg-icon.component';
import { ChatFilterComponent } from '../widgets/chat-filter/chat-filter.component';
import { ChatBoxComponent } from '../widgets/chat-box/chat-box.component';

@Component({
  selector: 'app-private-chat',
  standalone : true,
  imports:[CommonSvgIconComponent,ChatFilterComponent,ChatBoxComponent],
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})

export class PrivateChatComponent {

  public isShow : boolean = false;
  
}
