import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-tooltip',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-tooltip.component.html',
  styleUrls: ['./login-tooltip.component.scss']
})
export class LoginTooltipComponent {

}
