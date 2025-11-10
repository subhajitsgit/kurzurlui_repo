import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { CommonSvgIconComponent } from '../../../../shared/components/common-svg-icon/common-svg-icon.component';

@Component({
  selector: 'app-add-product-details',
  standalone: true,
  imports:[NgxEditorModule,ReactiveFormsModule,CommonSvgIconComponent,CommonModule,FormsModule],
  templateUrl: './add-product-details.component.html',
  styleUrls: ['./add-product-details.component.scss']
})

export class AddProductDetailsComponent {

  public activeStep: number = 1;
  public validate: boolean = false;
  public productForm: FormGroup;
  public editor: Editor;

  public html = '';
  @Output() activeSteps = new EventEmitter<number>();

  constructor() {
    this.productForm = new FormGroup({
      product_Title: new FormControl("", Validators.required),
      text: new FormControl(""),
    })
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  next() {
    this.validate = true;
    if (this.productForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.productForm.get('product_Title');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
