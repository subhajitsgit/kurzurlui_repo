import { Component } from '@angular/core';
import { DefaultPaginationComponent } from './default-pagination/default-pagination.component';
import { PaginationAlignmentComponent } from './pagination-alignment/pagination-alignment.component';
import { PaginationSizingComponent } from './pagination-sizing/pagination-sizing.component';
import { PaginationWithActiveComponent } from './pagination-with-active/pagination-with-active.component';
import { PaginationWithIconsComponent } from './pagination-with-icons/pagination-with-icons.component';
import { RoundedPaginationComponent } from './rounded-pagination/rounded-pagination.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [DefaultPaginationComponent,PaginationAlignmentComponent,PaginationSizingComponent,
    PaginationWithActiveComponent,PaginationWithIconsComponent,RoundedPaginationComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

}
