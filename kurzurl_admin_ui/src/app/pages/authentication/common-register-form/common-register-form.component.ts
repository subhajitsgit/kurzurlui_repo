import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-common-register-form',
  standalone: true,
  imports:[CommonRegisterFormComponent,RouterModule,FeatherIconsComponent],
  templateUrl: './common-register-form.component.html',
  styleUrls: ['./common-register-form.component.scss']
})

export class CommonRegisterFormComponent {

  public show: boolean = true;

}
