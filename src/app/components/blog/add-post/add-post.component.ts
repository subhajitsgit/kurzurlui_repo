import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";
import { Editor, NgxEditorModule } from "ngx-editor";

@Component({
  selector: "app-add-post",
  standalone:true,
  imports:[NgxEditorModule,NgSelectModule,DropzoneModule,FormsModule,CommonModule],
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})

export class AddPostComponent {

  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public editor: Editor;
  public html = '';
  
  public text = 'Drag & Drop your files or Browse'

  public config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public cities2 = [
    { id: 1, name: "LifeStyle" },
    { id: 2, name: "Travel" },
  ];

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
