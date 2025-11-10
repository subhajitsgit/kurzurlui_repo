import { Component, EventEmitter, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateNewCategoryComponent } from "./create-new-category/create-new-category.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TagInputModule } from "ngx-chips";
import { CommonModule } from "@angular/common";
import { CommonSvgIconComponent } from "../../../../shared/components/common-svg-icon/common-svg-icon.component";

@Component({
  selector: "app-product-categories",
  standalone: true,
  imports:[TagInputModule,ReactiveFormsModule,CommonModule,CommonSvgIconComponent],
  templateUrl: "./product-categories.component.html",
  styleUrls: ["./product-categories.component.scss"],
})

export class ProductCategoriesComponent {
  
  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 3;
  public validate: boolean = false;
  public categoryForm : FormGroup;
  public items = [];

  constructor(public modal: NgbModal) {
    this.categoryForm = new FormGroup({
      add_Category: new FormControl("", Validators.required),
      add_Tag: new FormControl("", Validators.required),
      publish_Status: new FormControl("", Validators.required),
      publish_Date_Tile: new FormControl("", Validators.required),
    });
  }

  category() {
    this.modal.open(CreateNewCategoryComponent, { size: "lg" });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);                                                                                      
  }
  
  next() {
    this.validate = true;
    if (this.categoryForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get addCategory() {
    return this.categoryForm.get("add_Category");
  }
  get addTag() {
    return this.categoryForm.get("add_Tag");
  }
  get publishStatus() {
    return this.categoryForm.get("publish_Status");
  }
  get publishDateTile() {
    return this.categoryForm.get("publish_Date_Tile");
  }
}
