import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { galleryGridData } from '../../../shared/data/data/gallery/gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports:[CommonModule,LightboxModule],
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})

export class GalleryGridComponent {

 public galleryGridData = galleryGridData;

}
