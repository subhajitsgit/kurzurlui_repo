import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-validation',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-validation.component.html',
  styleUrls: ['./login-validation.component.scss']
})
export class LoginValidationComponent {

}
