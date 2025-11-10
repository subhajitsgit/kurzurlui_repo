import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { CommonSvgIconComponent } from '../../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-additional-options',
  standalone: true,
  imports: [CommonSvgIconComponent,TagInputModule,FormsModule,AngularEditorModule],
  templateUrl: './additional-options.component.html',
  styleUrls: ['./additional-options.component.scss']
})

export class AdditionalOptionsComponent {

  public htmlContent = '';
  public items = [];

}
