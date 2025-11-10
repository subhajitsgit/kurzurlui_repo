import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip-form',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './tooltip-form.component.html',
  styleUrls: ['./tooltip-form.component.scss']
})

export class TooltipFormComponent {

  public validate = false;
  public tooltipForm = new FormGroup({});

  public form() {
    if (!this.tooltipForm.valid) {
      this.validate = false;
    } else {
      this.validate = true;
    }
  }
}
