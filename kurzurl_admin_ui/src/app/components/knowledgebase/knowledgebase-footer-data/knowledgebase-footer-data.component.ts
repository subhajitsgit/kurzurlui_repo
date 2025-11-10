import { Component } from '@angular/core';
import { articlesAndVideosData, featuredTutorialData } from '../../../shared/data/data/knowladgebase/knowladgebase';
import { FeaturedTutorialsComponent } from '../../faq/featured-tutorials/featured-tutorials.component';
import { LatestArticlesVideosComponent } from '../../faq/latest-articles-videos/latest-articles-videos.component';

@Component({
  selector: 'app-knowledgebase-footer-data',
  standalone: true,
  imports:[FeaturedTutorialsComponent,LatestArticlesVideosComponent],
  templateUrl: './knowledgebase-footer-data.component.html',
  styleUrls: ['./knowledgebase-footer-data.component.scss']
})

export class KnowledgebaseFooterDataComponent {

  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;

}
