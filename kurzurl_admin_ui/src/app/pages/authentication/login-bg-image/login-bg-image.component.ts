import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-bg-image',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-bg-image.component.html',
  styleUrls: ['./login-bg-image.component.scss']
})
export class LoginBgImageComponent {

}
