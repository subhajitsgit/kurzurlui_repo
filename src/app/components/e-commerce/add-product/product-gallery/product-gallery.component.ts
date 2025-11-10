import { Component, EventEmitter, Output } from "@angular/core";
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";
import Swal from "sweetalert2";
import { CommonSvgIconComponent } from "../../../../shared/components/common-svg-icon/common-svg-icon.component";

@Component({
  selector: "app-product-gallery",
  standalone: true,
  imports: [DropzoneModule, CommonSvgIconComponent],
  templateUrl: "./product-gallery.component.html",
  styleUrls: ["./product-gallery.component.scss"],
})

export class ProductGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 2;

  public image = '<i class="icon-cloud-up"></i><h5>Drag your image here, or <a class="txt-primary">browser</a></h5><span class="note">SVG,PNG,JPG or GIF</span>';
  public gallery = '<i class="icon-cloud-up"></i><h5>Drag files here</h5><span class="note">Add Product Gallery Images</span>';

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    maxFiles: 1
  };

  public galleryConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    acceptedFiles: 'image/*',
    uploadMultiple: true,
  };

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccessGallery(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  onUploadErrorGallery(args: any): void {
    console.log("onUploadError:", args);
  }

  next() {
    if (this.image.length === 0) {
      Swal.fire({
        title: "Please upload product image",
        confirmButtonColor: "var(--theme-deafult)",
      });
    } else if (this.gallery.length === 0) {
      Swal.fire({
        title: "Please upload product gallery",
        confirmButtonColor: "var(--theme-deafult)",
      });
    } else {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
