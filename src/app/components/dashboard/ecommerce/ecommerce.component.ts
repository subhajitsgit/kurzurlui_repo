import { Component } from "@angular/core";
import * as ChartData from "../../../shared/data/chart/general/apex-chart";
import * as data from "../../../shared/data/data/dashboard/ecommerce";
import { CommonChartComponent } from "./common-chart/common-chart.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { RecentCustomersComponent } from "./recent-customers/recent-customers.component";
import { RecentOrdersComponent } from "./recent-orders/recent-orders.component";
import { RevenueByCategoryComponent } from "./revenue-by-category/revenue-by-category.component";
import { SalesOverviewComponent } from "./sales-overview/sales-overview.component";
import { TopSellerComponent } from "./top-seller/top-seller.component";
import { UserByContinentComponent } from "./user-by-continent/user-by-continent.component";

@Component({
  selector: "app-ecommerce",
  standalone: true,
  imports: [CommonChartComponent,ProductSliderComponent,RecentCustomersComponent,
    RecentOrdersComponent,RevenueByCategoryComponent,SalesOverviewComponent,
    TopSellerComponent,UserByContinentComponent],
  templateUrl: "./ecommerce.component.html",
  styleUrls: ["./ecommerce.component.scss"],
})

export class EcommerceComponent {

  public totalSells = data.totalSells;
  public TotalSellsChart = ChartData.TotalSells;
  public dailyOrders = data.dailyOrders;
  public dailyOrdersChart = ChartData.dailyOrders;
  public ordersValue = data.ordersValue;
  public ordersValueChart = ChartData.ordersValue;
  public dailyRevenue = data.dailyRevenue;
  public dailyRevenueChart = ChartData.dailyRevenue;

}
