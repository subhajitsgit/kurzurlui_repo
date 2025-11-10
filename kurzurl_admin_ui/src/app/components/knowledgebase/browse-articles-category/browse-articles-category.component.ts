import { Component } from '@angular/core';
import { browseArticlesData } from '../../../shared/data/data/knowladgebase/knowladgebase';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-browse-articles-category',
  standalone: true,
  imports:[FeatherIconsComponent],
  templateUrl: './browse-articles-category.component.html',
  styleUrls: ['./browse-articles-category.component.scss']
})

export class BrowseArticlesCategoryComponent {

  public browseArticlesData = browseArticlesData;


}
