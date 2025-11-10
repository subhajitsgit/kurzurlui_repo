import { Component } from '@angular/core';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-with-two-image',
  standalone: true,
  imports:[CommonRegisterFormComponent,RouterModule],
  templateUrl: './register-with-two-image.component.html',
  styleUrls: ['./register-with-two-image.component.scss']
})
export class RegisterWithTwoImageComponent {

}
