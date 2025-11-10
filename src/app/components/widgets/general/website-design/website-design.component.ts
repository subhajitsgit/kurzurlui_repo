import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-website-design',
  standalone: true,
  imports:[RouterModule,ClickOutsideDirective],
  templateUrl: './website-design.component.html',
  styleUrls: ['./website-design.component.scss']
})

export class WebsiteDesignComponent {

  public websiteDesign = data.websiteDesign
  public isShow : boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }
}
