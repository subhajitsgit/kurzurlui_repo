import { Component } from "@angular/core";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-multiple-collapse-accordion",
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: "./multiple-collapse-accordion.component.html",
  styleUrls: ["./multiple-collapse-accordion.component.scss"],
})

export class MultipleCollapseAccordionComponent {
  
  public isPrimary: boolean = false;
  public isWarning: boolean = false;

}
