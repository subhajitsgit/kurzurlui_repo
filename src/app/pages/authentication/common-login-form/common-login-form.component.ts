import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-common-login-form',
  standalone: true,
  imports:[RouterModule,FeatherIconsComponent],
  templateUrl: './common-login-form.component.html',
  styleUrls: ['./common-login-form.component.scss']
})

export class CommonLoginFormComponent {

  public show: boolean = true;


}
