import { Component } from '@angular/core';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-simple',
  standalone: true,
  imports:[CommonRegisterFormComponent,RouterModule],
  templateUrl: './register-simple.component.html',
  styleUrls: ['./register-simple.component.scss']
})
export class RegisterSimpleComponent {

}
