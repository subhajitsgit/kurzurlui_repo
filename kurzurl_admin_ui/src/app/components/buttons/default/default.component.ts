import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-default',
  standalone:true,
  imports:[CommonModule,NgbTooltipModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent {

  public defaultButtonsData = Data.defaultButtonsData;
  public outlinedButtonsData = Data.outlinedButtonsData;
  public gradienButtonData = Data.gradienButtonData;

}
