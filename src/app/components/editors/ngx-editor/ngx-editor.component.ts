import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editor',
  standalone: true,
  imports:[NgxEditorModule,FormsModule],
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss'
})

export class NgxEditorComponent {

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
