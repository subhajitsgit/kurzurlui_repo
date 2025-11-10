import { Component } from '@angular/core';
import { learningData, learningTopData } from '../../../shared/data/data/learning/learning';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';

@Component({
  selector: 'app-learning-list',
  standalone: true,
  imports:[LearningFilterComponent],
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})


export class LearningListComponent {

  public learningTopData = learningTopData;
  public learningData = learningData;

}
