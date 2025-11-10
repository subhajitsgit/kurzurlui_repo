import { Component, HostListener } from "@angular/core";
import { LayoutService } from "../../../../shared/services/layout.service";
import { NavService } from "../../../../shared/services/nav.service";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CustomiserComponent } from "../../customiser/customiser.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HideScrollNavService } from "../../../services/hidescrollnav.service";

@Component({
  selector: "app-content",
  standalone:true,
  imports:[HeaderComponent,SidebarComponent,FooterComponent,CustomiserComponent,CommonModule,RouterModule],
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})

export class ContentComponent {

  public innerWidth : number;
  public footerFix = false;
  public footerLight = false;
  public footerDark : boolean = false;

  constructor(
    public navService: NavService,
    public hideScrollNavService: HideScrollNavService,
    public layout : LayoutService,
  ) {}

  ngOnInit (){
    this.innerWidth = window.innerWidth; 
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    if (window.innerWidth < 1200) {
      this.layout.config.settings.sidebar_type = "page-wrapper compact-wrapper";
    }
  } 

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type + '' 
    );
  }

  ngDoCheck() {
    if (window.location.pathname == "/page-layout/footer-dark") {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-light') {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-fixed') {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }

  ngOnDestroy() {
    this.footerDark = false;
  }
  
}
