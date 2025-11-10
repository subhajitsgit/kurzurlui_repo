import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unlock-user',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.scss']
})

export class UnlockUserComponent {

  public show: boolean = true;


}
