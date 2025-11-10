import { Component } from '@angular/core';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-sweetalert2',
  standalone: true,
  imports:[CommonLoginFormComponent,RouterModule],
  templateUrl: './login-sweetalert2.component.html',
  styleUrls: ['./login-sweetalert2.component.scss']
})
export class LoginSweetalert2Component {

}
