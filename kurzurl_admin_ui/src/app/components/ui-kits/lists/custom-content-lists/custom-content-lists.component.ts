import { Component } from '@angular/core';
import { customContentData } from '../../../../shared/data/data/ui-kits/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-content-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-content-lists.component.html',
  styleUrls: ['./custom-content-lists.component.scss']
})

export class CustomContentListsComponent {

  public customContentData = customContentData;

}
