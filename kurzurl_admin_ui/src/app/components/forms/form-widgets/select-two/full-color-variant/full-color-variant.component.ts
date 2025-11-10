import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-color-variant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-color-variant.component.html',
  styleUrls: ['./full-color-variant.component.scss']
})

export class FullColorVariantComponent {

  public colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"];


}
