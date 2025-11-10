import { Component, Input } from '@angular/core';
import { articlesAndVideos } from '../../../shared/data/data/faq/faq';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-latest-articles-videos',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './latest-articles-videos.component.html',
  styleUrls: ['./latest-articles-videos.component.scss']
})

export class LatestArticlesVideosComponent {

  @Input() data: articlesAndVideos[];

}
