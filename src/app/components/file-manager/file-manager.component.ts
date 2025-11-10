import { Component } from "@angular/core";
import * as data from "../../shared/data/data/file-maganer/file-maganer";
import { FeatherIconsComponent } from "../../shared/components/feather-icons/feather-icons.component";
import { RightContentComponent } from "./right-content/right-content.component";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "../../shared/directive/click-outside.directive";

@Component({
  selector: "app-file-manager",
  standalone: true,
  imports: [FeatherIconsComponent,RightContentComponent,CommonModule,ClickOutsideDirective],
  templateUrl: "./file-manager.component.html",
  styleUrls: ["./file-manager.component.scss"],
})

export class FileManagerComponent {

  public sidebar = data.sidebarData;
  public isShow: boolean = false;

  Outside(){
   this.isShow = false;  
  }
  
}
