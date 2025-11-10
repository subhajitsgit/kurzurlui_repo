import { Routes } from '@angular/router';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';

export default [
  {
    path: 'private-chat',
    component: PrivateChatComponent,
    data: {
      title: 'Private Chat',
      breadcrumb: 'Private Chat',
    }
  },
  {
    path: 'group-chat',
    component: GroupChatComponent,
    data: {
      title: 'Group Chat',
      breadcrumb: 'Group Chat',
    }
  },
] as Routes

