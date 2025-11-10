import { Component } from "@angular/core";
import { defaultCheckbox } from "../../../../../shared/data/data/forms/chechbox-radio";

@Component({
  selector: "app-default-checkbox",
  standalone: true,
  imports: [],
  templateUrl: "./default-checkbox.component.html",
  styleUrls: ["./default-checkbox.component.scss"],
})

export class DefaultCheckboxComponent {

  public defaultCheckbox =defaultCheckbox;
  
}
