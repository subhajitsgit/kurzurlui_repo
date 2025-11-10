import { Component } from '@angular/core';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { DefaultSliderComponent } from './default-slider/default-slider.component';
import { DisabledSliderComponent } from './disabled-slider/disabled-slider.component';
import { MinMaxValueSliderComponent } from './min-max-value-slider/min-max-value-slider.component';
import { PrettifyNumberSliderComponent } from './prettify-number-slider/prettify-number-slider.component';

@Component({
  selector: 'app-range-slider',
  standalone: true,
  imports:[CustomSliderComponent,DefaultSliderComponent,DisabledSliderComponent,
    MinMaxValueSliderComponent,PrettifyNumberSliderComponent],
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {

}
