import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [DropzoneModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent {

  public text = '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  
  public config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

}
