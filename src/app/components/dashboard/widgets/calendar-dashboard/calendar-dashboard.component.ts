import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar-dashboard',
  standalone: true,
  imports: [NgbDatepicker,FormsModule],
  templateUrl: './calendar-dashboard.component.html',
  styleUrls: ['./calendar-dashboard.component.scss']
})

export class CalendarDashboardComponent {

  public model: NgbDateStruct;
  public date: { year: number; month: number };

}
