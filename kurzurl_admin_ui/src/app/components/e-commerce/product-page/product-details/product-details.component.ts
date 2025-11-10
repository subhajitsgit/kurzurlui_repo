import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-product-details",
  standalone: true,
  imports :[BarRatingModule,RouterModule],
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})

export class ProductDetailsComponent {

  public rating = 2.6;
  
}
