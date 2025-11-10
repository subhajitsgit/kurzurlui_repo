import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as data from '../../../shared/data/data/search-result/search-result';

@Component({
  selector: 'app-video',
  standalone: true,
  imports:[],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent {

  public videosData = data.videosData;
 
  constructor(public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
