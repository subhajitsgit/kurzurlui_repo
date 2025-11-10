import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HideScrollNavService } from "../../services/hidescrollnav.service";
import { NavService } from "../../services/nav.service";
import { SearchService } from "../../services/search.service";
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { CommonSvgIconComponent } from "../common-svg-icon/common-svg-icon.component";
import { FeatherIconsComponent } from "../feather-icons/feather-icons.component";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { BookmarkComponent } from "./bookmark/bookmark.component";
import { CartComponent } from "./cart/cart.component";
import { LanguageComponent } from "./language/language.component";
import { MessagesComponent } from "./messages/messages.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";
import { ThemeModeComponent } from "./theme-mode/theme-mode.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonSvgIconComponent, SvgIconComponent, FeatherIconsComponent,
    FormsModule, RouterModule, CommonModule,
    SearchComponent, LanguageComponent, NotificationsComponent,
    BookmarkComponent, ThemeModeComponent, MessagesComponent,
    CartComponent, ProfileComponent,BreadcrumbComponent],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})

export class HeaderComponent {

  public isFlip: boolean = false;
  public isSearchOpen: boolean = false;
  public open: boolean = false;

  constructor(
    public navService: NavService,
    public hideScrollNavService: HideScrollNavService,
    public searchService: SearchService
  ) { }

  sidebarToggle() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }
}
