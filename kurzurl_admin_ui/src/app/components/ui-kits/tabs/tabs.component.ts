import { Component } from '@angular/core';
import { BorderTabsComponent } from './border-tabs/border-tabs.component';
import { IconsWithTabsComponent } from './icons-with-tabs/icons-with-tabs.component';
import { JustifyTabsComponent } from './justify-tabs/justify-tabs.component';
import { MaterialStyleLeftTabsComponent } from './material-style-left-tabs/material-style-left-tabs.component';
import { MaterialStyleTabsComponent } from './material-style-tabs/material-style-tabs.component';
import { PillsTabsComponent } from './pills-tabs/pills-tabs.component';
import { SimpleTabsComponent } from './simple-tabs/simple-tabs.component';
import { VerticalTabsComponent } from './vertical-tabs/vertical-tabs.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports:[BorderTabsComponent,IconsWithTabsComponent,JustifyTabsComponent,
    MaterialStyleLeftTabsComponent,MaterialStyleTabsComponent,PillsTabsComponent,
    SimpleTabsComponent,VerticalTabsComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

}
