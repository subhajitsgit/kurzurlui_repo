import { ChartComponent } from './chart/chart.component';
import { GeneralComponent } from './general/general.component';

export default [
  {
    path: 'general',
    component: GeneralComponent,
    data: {
      title: 'Widgets',
      breadcrumb: 'General',
    }
  },
  {
    path: 'chart',
    component: ChartComponent,
    data: {
      title: 'Chart',
      breadcrumb: 'Chart',
    }
  },
]

