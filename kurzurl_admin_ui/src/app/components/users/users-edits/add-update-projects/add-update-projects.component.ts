import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/user/user';

@Component({
  selector: 'app-add-update-projects',
  standalone: true,
  imports: [],
  templateUrl: './add-update-projects.component.html',
  styleUrls: ['./add-update-projects.component.scss']
})

export class AddUpdateProjectsComponent {

  public addUpdateData = data.addUpdateData;

}
