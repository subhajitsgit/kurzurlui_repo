import { Component } from '@angular/core';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-bg-image',
  standalone: true,
  imports:[CommonRegisterFormComponent,RouterModule],
  templateUrl: './register-bg-image.component.html',
  styleUrls: ['./register-bg-image.component.scss']
})
export class RegisterBgImageComponent {

}
