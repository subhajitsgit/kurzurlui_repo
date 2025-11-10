import { Component } from '@angular/core';
import { DefaultFileUploadComponent } from './default-file-upload/default-file-upload.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';

@Component({
  selector: 'app-dropzone',
  standalone: true,
  imports:[DefaultFileUploadComponent,ImagePreviewComponent,MultiFileUploadComponent,SingleFileUploadComponent],
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {

}
