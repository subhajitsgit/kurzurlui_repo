import { Component } from "@angular/core";
import { addProductTabData } from "../../../shared/data/data/ecommerce/add-product";
import { AddProductTabComponent } from "./add-product-tab/add-product-tab.component";
import { AddProductDetailsComponent } from "./add-product-details/add-product-details.component";
import { AdvanceComponent } from "./advance/advance.component";
import { ProductCategoriesComponent } from "./product-categories/product-categories.component";
import { ProductGalleryComponent } from "./product-gallery/product-gallery.component";
import { SellingPricesComponent } from "./selling-prices/selling-prices.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-add-product",
  standalone: true,
  imports : [AddProductTabComponent,AddProductDetailsComponent,AdvanceComponent,
    ProductCategoriesComponent,ProductGalleryComponent,SellingPricesComponent,CommonModule],
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})

export class AddProductComponent {

  public addProductTabData = addProductTabData;
  public activeSteps!: number;

  ngOnInit() {
    const data = addProductTabData.filter((data) => {
      return data.steps === 1;
    });

    this.activeSteps = data[0].steps;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
