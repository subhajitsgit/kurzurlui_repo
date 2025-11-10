import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/ui-kits/list';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';
import { CustomContentListsComponent } from './custom-content-lists/custom-content-lists.component';
import { DisabledListsComponent } from './disabled-lists/disabled-lists.component';
import { HorizontalListsComponent } from './horizontal-lists/horizontal-lists.component';
import { JavaScriptBehaviorComponent } from './java-script-behavior/java-script-behavior.component';
import { ListsWithNumbersComponent } from './lists-with-numbers/lists-with-numbers.component';
import { NumberedBadgeListsComponent } from './numbered-badge-lists/numbered-badge-lists.component';
import { RadiosComponent } from './radios/radios.component';
import { ScrollableListsComponent } from './scrollable-lists/scrollable-lists.component';
import { ContextualClassesComponent } from './contextual-classes/contextual-classes.component';

@Component({
  selector: 'app-lists',
  standalone:true,
  imports:[CheckboxListComponent,ContextualClassesComponent,CustomContentListsComponent,
    DisabledListsComponent,HorizontalListsComponent,
    JavaScriptBehaviorComponent,ListsWithNumbersComponent,NumberedBadgeListsComponent,
    RadiosComponent,ScrollableListsComponent
  ],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent {

  public commonListData = data.commanList;

}
