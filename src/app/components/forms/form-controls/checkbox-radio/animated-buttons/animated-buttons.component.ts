import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animatedButtons } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-animated-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-buttons.component.html',
  styleUrls: ['./animated-buttons.component.scss']
})

export class AnimatedButtonsComponent {

  public animatedButtons = animatedButtons;

}
