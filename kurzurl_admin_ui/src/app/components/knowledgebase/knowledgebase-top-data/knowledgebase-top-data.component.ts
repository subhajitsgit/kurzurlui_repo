import { Component } from '@angular/core';
import { knowledgebaseData } from '../../../shared/data/data/knowladgebase/knowladgebase';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { commonDataComponent } from '../../faq/common-data/common-data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledgebase-top-data',
  standalone: true,
imports:[FeatherIconsComponent,commonDataComponent,CommonModule],
  templateUrl: './knowledgebase-top-data.component.html',
  styleUrls: ['./knowledgebase-top-data.component.scss']
})

export class KnowledgebaseTopDataComponent {

  public knowledgebaseData = knowledgebaseData;

}
