import { Component, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';
import { masonryGalleryGridWithDesc } from '../../../shared/data/data/gallery/gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-masonry-gallery-with-desc',
  standalone: true,
  imports:[NgxMasonryModule,LightboxModule],
  templateUrl: './masonry-gallery-with-desc.component.html',
  styleUrls: ['./masonry-gallery-with-desc.component.scss']
})

export class MasonryGalleryWithDescComponent {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  public limit = 20;

  public masonryGalleryGridWithDesc = masonryGalleryGridWithDesc;

}
