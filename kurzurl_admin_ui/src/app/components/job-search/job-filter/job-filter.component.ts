import { Component } from '@angular/core';
import { filterCheckBox, filterData } from '../../../shared/data/data/job-search/job-search';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-job-filter',
  standalone:true,
  imports:[FeatherIconsComponent,CommonModule,NgbCollapseModule,ClickOutsideDirective],
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})

export class JobFilterComponent {

  public filterData = filterData;
  public filterCheckBox = filterCheckBox;
  public isCollapsed = false;
  public isOpen : boolean = false;

  Outside(){
    this.isOpen = false;  
   }

}
