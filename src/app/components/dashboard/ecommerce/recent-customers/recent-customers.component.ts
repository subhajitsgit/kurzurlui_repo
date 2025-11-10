import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/ecommerce";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-recent-customers",
  standalone: true,
  imports: [RouterModule,CommonModule,ClickOutsideDirective],
  templateUrl: "./recent-customers.component.html",
  styleUrls: ["./recent-customers.component.scss"],
})

export class RecentCustomersComponent {

  public isShow: boolean = false;
  public recentCustomers = data.recentCustomers;

  clickOutside(): void {
    this.isShow = false;
  }

}
