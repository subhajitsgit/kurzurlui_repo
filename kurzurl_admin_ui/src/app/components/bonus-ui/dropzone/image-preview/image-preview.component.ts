import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-preview',
  standalone:true,
  imports:[DropzoneModule],
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})

export class ImagePreviewComponent {

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };

  public text = 'Drag & Drop your files or Browse';

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

}
