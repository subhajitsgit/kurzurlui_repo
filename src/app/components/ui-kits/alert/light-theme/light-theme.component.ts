import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-light-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light-theme.component.html',
  styleUrls: ['./light-theme.component.scss']
})

export class LightThemeComponent {

  public lightThemeAlertData = Data.lightThemeAlertData;

}
