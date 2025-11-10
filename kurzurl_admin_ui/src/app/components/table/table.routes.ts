import { Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { TableComponentsComponent } from './table-components/table-components.component';

export default [
  {
    path: 'bootstrap-tables/basic',
    component: BasicTableComponent,
    data: {
      title: 'Bootstrap Basic Tables',
      breadcrumb: 'Bootstrap Basic Tables',
    }
  },
  {
    path: 'bootstrap-tables/table-components',
    component: TableComponentsComponent,
    data: {
      title: 'Table Components',
      breadcrumb: 'Table Components',
    }
  },
  {
    path: 'datatable',
    component: DataTablesComponent,
    data: {
      title: 'Basic DataTables',
      breadcrumb: 'Basic DataTables',
    }
  },
] as Routes

