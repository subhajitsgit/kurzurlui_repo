import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonSvgIconComponent } from "../../../../../shared/components/common-svg-icon/common-svg-icon.component";

@Component({
  selector: "app-inventory",
  standalone: true,
  imports:[CommonSvgIconComponent],
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})

export class InventoryComponent {
  @Output() activeSteps = new EventEmitter<number>();
  @Input() activeStep: number;

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
