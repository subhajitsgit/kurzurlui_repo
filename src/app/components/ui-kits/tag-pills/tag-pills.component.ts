import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/ui-kits/tag-pills';
import { BadgeHeadingsExampleComponent } from './badge-headings-example/badge-headings-example.component';
import { BadgesAsPartButtonsComponent } from './badges-as-part-buttons/badges-as-part-buttons.component';
import { CommonTagPillsComponent } from './common-tag-pills/common-tag-pills.component';

@Component({
  selector: 'app-tag-pills',
  standalone: true,
  imports: [BadgeHeadingsExampleComponent,BadgesAsPartButtonsComponent,CommonTagPillsComponent],
  templateUrl: './tag-pills.component.html',
  styleUrls: ['./tag-pills.component.scss']
})

export class TagPillsComponent {

  public commonTagPillsData = data.commonTagPillsData;

}
