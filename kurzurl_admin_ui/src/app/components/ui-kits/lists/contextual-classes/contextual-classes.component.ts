import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contextual-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contextual-classes.component.html',
  styleUrls: ['./contextual-classes.component.scss']
})

export class ContextualClassesComponent {

  public contextualClassListData = data.contextualClassListData;

}
