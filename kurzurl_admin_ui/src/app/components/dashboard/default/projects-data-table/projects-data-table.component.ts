import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/dashboard";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-projects-data-table",
  standalone: true,
  imports: [RouterModule, ClickOutsideDirective],
  templateUrl: "./projects-data-table.component.html",
  styleUrls: ["./projects-data-table.component.scss"],
})

export class ProjectsDataTableComponent {

  public isShowData: boolean = false;
  public tableData = data.tableData;

  openMenu(id: number) {
    this.tableData.filter((data) => {
      if (data.id == id) {
        data.active = !data.active;
      }
    });
  }

  clickOutside(): void {
    this.isShowData = false;

  }

}
