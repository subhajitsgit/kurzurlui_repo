import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Editor, NgxEditorModule } from "ngx-editor";

@Component({
  selector: "app-compose-email",
  standalone: true,
  imports: [NgxEditorModule,FormsModule],
  templateUrl: "./compose-email.component.html",
  styleUrls: ["./compose-email.component.scss"],
})

export class ComposeEmailComponent {
  
  public isCc: boolean = false;
  public isBcc: boolean = false;
  public editor: Editor;
  public html = '';

  constructor(private modal: NgbModal) {}

  ngOnInit(): void {
    this.editor = new Editor();
  }
  
  close() {
    this.modal.dismissAll();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
