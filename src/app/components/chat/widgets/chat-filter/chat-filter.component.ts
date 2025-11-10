import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CommonSvgIconComponent } from "../../../../shared/components/common-svg-icon/common-svg-icon.component";
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";
import * as data from "../../../../shared/data/data/chat/chat";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-chat-filter",
  standalone: true,
  imports: [FeatherIconsComponent, CommonSvgIconComponent, CommonModule, ClickOutsideDirective],
  templateUrl: "./chat-filter.component.html",
  styleUrls: ["./chat-filter.component.scss"],
})

export class ChatFilterComponent {

  public openTab: string = "chats";
  public chat = data.chat;
  public Contacts = data.Contacts;
  public isShow: boolean = false;

  tabbed(val: string) {
    this.openTab = val;
  }

  open() {
    this.Contacts.forEach((data) => {
      data.item.forEach(ele => {
        if (data.id = ele.id) {
          return ele.active = !ele.active;
        }
        return ele
      })
    });
  }

}
