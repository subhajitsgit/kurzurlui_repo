import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateTimeComponent } from './date-time/date-time.component';

@Component({
  selector: 'app-basic-html-input-control',
  standalone: true,
  imports:[DateTimeComponent],
  templateUrl: './basic-html-input-control.component.html',
  styleUrls: ['./basic-html-input-control.component.scss']
})

export class BasicHtmlInputControlComponent {

  constructor(private router:Router) {}

  submit() {
    this.router.navigate(['/form-controls/base-inputs'])
  }

}
