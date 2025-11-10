import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-default-file-upload',
  standalone:true,
  imports:[DropzoneModule],
  templateUrl: './default-file-upload.component.html',
  styleUrls: ['./default-file-upload.component.scss']
})

export class DefaultFileUploadComponent {

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text = 'Drag & Drop your files or Browse';
  
  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

}
