import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";
import { Observable } from "rxjs";
import { CommonSvgIconComponent } from "../../../shared/components/common-svg-icon/common-svg-icon.component";
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { productListInterface } from "../../../shared/data/data/ecommerce/product-list";
import { ProductListSortableDirective, SortEvent } from "../../../shared/directive/product-list-sortable.directive";
import { ProductListService } from "../../../shared/services/product-list.service";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports:[FeatherIconsComponent,RouterModule,FormsModule,CommonSvgIconComponent,
    BarRatingModule,NgbPaginationModule,CommonModule,
    ProductListSortableDirective
  ],
  providers:[DecimalPipe,ProductListService],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})

export class ProductListComponent {
  public isShow: boolean = false;
  public productList$: Observable<productListInterface[]>;
  public productList: productListInterface[] = [];
  public total$: Observable<number>;

  @ViewChildren(ProductListSortableDirective)
  public headers: QueryList<ProductListSortableDirective>;

  constructor(public service: ProductListService) {
    this.productList$ = service.productList$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.service.productList$.subscribe((data) => {
      if (data) {
        this.productList = data;
      }
    });
  }

  tiggle() {
    this.isShow = !this.isShow;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
