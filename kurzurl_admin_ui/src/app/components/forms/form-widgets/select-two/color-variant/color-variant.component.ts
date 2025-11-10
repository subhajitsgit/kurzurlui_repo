import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-variant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-variant.component.html',
  styleUrls: ['./color-variant.component.scss']
})

export class ColorVariantComponent {

  public colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"];


}
