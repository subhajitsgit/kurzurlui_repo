import { Component } from '@angular/core';
import { LayoutGroupComponent } from './layout-group/layout-group.component';

@Component({
  selector: 'app-basic-floating-input-control',
  standalone: true,
  imports:[LayoutGroupComponent],
  templateUrl: './basic-floating-input-control.component.html',
  styleUrls: ['./basic-floating-input-control.component.scss']
})

export class BasicFloatingInputControlComponent {

  public validate = false;
  constructor() { }

  ngOnInit(): void {
  }
  public submit() {
    this.validate = !this.validate;
  }

}
