import { Routes } from '@angular/router';
import { ClipBoardComponent } from './clip-board/clip-board.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SelectTwoComponent } from './select-two/select-two.component';
import { SwitchComponent } from './switch/switch.component';
import { TouchspinComponent } from './touchspin/touchspin.component';
import { TypeaheadComponent } from './touchspin/typeahead/typeahead.component';

export default [
  {
    path: 'datepicker',
    component: DatePickerComponent,
    data: {
      title: 'Datepicker',
      breadcrumb: 'Datepicker'
    }
  },
  {
    path: 'touchspin',
    component: TouchspinComponent,
    data: {
      title: 'Touchspin',
      breadcrumb: 'Touchspin'
    }
  },
  {
    path: 'select2',
    component: SelectTwoComponent,
    data: {
      title: 'Select2',
      breadcrumb: 'Select2'
    }
  },
  {
    path: 'switch',
    component: SwitchComponent,
    data: {
      title: 'Switch',
      breadcrumb: 'Switch'
    }
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent,
    data: {
      title: 'Typeahead',
      breadcrumb: 'Typeahead'
    }
  },
  {
    path: 'clipboard',
    component: ClipBoardComponent,
    data: {
      title: 'Clipboard',
      breadcrumb: 'Clipboard'
    }
  },
] as  Routes


