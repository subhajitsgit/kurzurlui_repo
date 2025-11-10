import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';

export default [
  {
    path: '',
    component: CalendarComponent,
    data: {
      title: 'Calender Basic',
      breadcrumb: 'Calender Basic',
    }
  }
] as Routes;

