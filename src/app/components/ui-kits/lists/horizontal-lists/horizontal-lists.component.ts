import { Component } from '@angular/core';
import { horizantalListData } from '../../../../shared/data/data/ui-kits/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horizontal-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-lists.component.html',
  styleUrls: ['./horizontal-lists.component.scss']
})

export class HorizontalListsComponent {

  public horizantlListData = horizantalListData;

}
