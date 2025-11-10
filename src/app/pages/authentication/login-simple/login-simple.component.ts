import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-simple',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-simple.component.html',
  styleUrls: ['./login-simple.component.scss']
})
export class LoginSimpleComponent {

}
