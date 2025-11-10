import { Component } from '@angular/core';
import { EmailLeftAsideComponent } from './email-left-aside/email-left-aside.component';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [EmailLeftAsideComponent],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent {

}
