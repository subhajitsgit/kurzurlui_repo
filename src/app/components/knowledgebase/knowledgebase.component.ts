import { Component } from '@angular/core';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { BrowseArticlesCategoryComponent } from './browse-articles-category/browse-articles-category.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';

@Component({
  selector: 'app-knowledgebase',
  standalone:true,
  imports:[KnowledgebaseTopDataComponent,BrowseArticlesCategoryComponent,KnowledgebaseFooterDataComponent],
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent {

}
