import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colors-schemes',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './colors-schemes.component.html',
  styleUrls: ['./colors-schemes.component.scss']
})

export class ColorsSchemesComponent {

  public isShow : boolean = false;
  
}
