import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as data from "../../../../shared/data/data/ecommerce/ecommerce";
import * as datas from "../../../../shared/data/data/ecommerce/ecommerce";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { BarRatingModule } from "ngx-bar-rating";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";
import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-product-filter",
  standalone: true,
  imports:[CarouselModule,BarRatingModule,NgxSliderModule,ClickOutsideDirective],
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.scss"],
})

export class ProductFilterComponent {

  public filterData = data.filterData;
  public maxvalue: number = 70;
  public value2: number = 100;
  public rating = 2.6;
  public productFilter = datas.productFilter;

  @Input() show: boolean;
  @Output() childEvent = new EventEmitter();

  public options: Options = {
    floor: 0,
    ceil: 200,
  };

  public customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  Outside(value: boolean) {
    value = false;
    this.childEvent.emit(value);
  }
}
