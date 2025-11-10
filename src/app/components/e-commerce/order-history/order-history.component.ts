import { Component, QueryList, ViewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";
import { Observable } from "rxjs";
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import * as data from "../../../shared/data/data/ecommerce/order-history";
import {
  SortEvent,
  orderHistorySortableDirective,
} from "../../../shared/directive/order-historay-sortable.directive";
import { OrderHistoryService } from "../../../shared/services/order-history.service";
import { CommonModule, DecimalPipe } from "@angular/common";

@Component({
  selector: "app-order-history",
  standalone:true,
  imports: [FeatherIconsComponent,BarRatingModule,
    FormsModule,NgbPaginationModule,CommonModule,
    orderHistorySortableDirective
  ],
  providers:[DecimalPipe,OrderHistoryService],
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"],
})

export class OrderHistoryComponent {
  public isShow: boolean = false;
  public orderHistoryData$: Observable<data.orderTable[]>;
  public total$: Observable<number>;
  public orderHistory = data.orderHistory;
  public orderTableData = data.orderTableData;
  public orderList: data.orderTable[];

  @ViewChildren(orderHistorySortableDirective)
  public headers: QueryList<orderHistorySortableDirective>;
  constructor(public orderHistoryService: OrderHistoryService) {
    this.orderHistoryData$ = orderHistoryService.orderList$;
    this.total$ = orderHistoryService.total$;
  }

  ngOnInit() {
    this.orderHistoryService.orderList$.subscribe((data) => {
      if (data) {
        this.orderList = data;
      }
    });
  }

  cancelOrder(index: number, id: number) {
    this.orderHistory.forEach((data) => {
      data.data.forEach((element) => {
        if (element.id == id) {
          data.data.splice(index, 1);
        }
      });
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortableOrder !== column) {
        header.direction = "";
      }
    });
    this.orderHistoryService.sortColumn = column;
    this.orderHistoryService.sortDirection = direction;
  }
}
