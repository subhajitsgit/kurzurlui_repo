import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.scss']
})

export class DarkThemeComponent {

  public darkThemeAlertData = Data.darkThemeAlertData;

}
