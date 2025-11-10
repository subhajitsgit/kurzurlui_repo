import { Component, EventEmitter, Output } from "@angular/core";
import { AdditionalOptionsComponent } from "./additional-options/additional-options.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-advance",
  standalone: true,
  imports: [AdditionalOptionsComponent,InventoryComponent,ShippingComponent,CommonModule],
  templateUrl: "./advance.component.html",
  styleUrls: ["./advance.component.scss"],
})

export class AdvanceComponent {

  public activeTab = "inventory";
  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 5;

  changeTab(value: string) {
    this.activeTab = value;
  }

  receiveChildData(step: number) {
    this.activeSteps.emit(step);
  }

}
