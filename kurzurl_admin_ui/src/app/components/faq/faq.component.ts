import { Component } from '@angular/core';
import { articlesAndVideosData, commonTopData } from '../../shared/data/data/faq/faq';
import { featuredTutorialData } from '../../shared/data/data/faq/faq';
import { QuestionsComponent } from './questions/questions.component';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticlesVideosComponent } from './latest-articles-videos/latest-articles-videos.component';
import { commonDataComponent } from './common-data/common-data.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports:[commonDataComponent,QuestionsComponent,SearchArticlesComponent,
    NavigationComponent,LatestUpdatesComponent,FeaturedTutorialsComponent,
    LatestArticlesVideosComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {

  public commonData  = commonTopData;
  public featuredTutorialData =  featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
