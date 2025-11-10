import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Editor, NgxEditorModule } from "ngx-editor";
import { CommonSvgIconComponent } from "../../../../shared/components/common-svg-icon/common-svg-icon.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-interview-mail",
  standalone: true,
  imports: [CommonSvgIconComponent,NgxEditorModule,FormsModule,
    CommonModule,FeatherIconsComponent,ClickOutsideDirective],
  templateUrl: "./interview-mail.component.html",
  styleUrls: ["./interview-mail.component.scss"],
})

export class InterviewMailComponent {

  public isBookmark: boolean = false;
  public isReply: boolean = false;

  @Input() open: boolean;
  @Output() childEvent = new EventEmitter();

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  clickValue(value: boolean) {
    value = false;
    this.childEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
