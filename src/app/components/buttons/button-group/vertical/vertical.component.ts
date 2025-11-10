import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})

export class VerticalComponent {

  public isShow : Boolean = false;
  public isShow1 : Boolean = false;
  public isShow2 : Boolean = false;

}
