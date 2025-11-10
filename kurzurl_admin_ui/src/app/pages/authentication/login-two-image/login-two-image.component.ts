import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-two-image',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-two-image.component.html',
  styleUrls: ['./login-two-image.component.scss']
})
export class LoginTwoImageComponent {

}
