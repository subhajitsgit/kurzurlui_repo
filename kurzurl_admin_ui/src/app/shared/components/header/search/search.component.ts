import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../../../shared/services/search.service';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'app-search',
  standalone:true,
  imports:[SvgIconComponent,FormsModule,RouterModule,CommonSvgIconComponent,CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  constructor( public searchService : SearchService ){ }

}
