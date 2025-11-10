import { Component } from '@angular/core';
import { Categories } from '../../../../shared/data/data/learning/learning';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {

  public Categories = Categories;

  public isCollapsed = false;

}
