import { Component } from '@angular/core';
import { ActiveMembersComponent } from './active-members/active-members.component';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';
import { DashboardNotificationsComponent } from './notifications/notifications.component';
import { OpeningOfLeafletsComponent } from './opening-of-leaflets/opening-of-leaflets.component';
import { ProjectsDataTableComponent } from './projects-data-table/projects-data-table.component';
import { SalesByProductComponent } from './sales-by-product/sales-by-product.component';
import { SalesStatisticComponent } from './sales-statistic/sales-statistic.component';
import { ShiftsOverviewComponent } from './shifts-overview/shifts-overview.component';
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone:true,
  imports : [ActiveMembersComponent,CustomerTransactionComponent,DashboardNotificationsComponent,
    OpeningOfLeafletsComponent,ProjectsDataTableComponent,SalesByProductComponent,
    SalesStatisticComponent,ShiftsOverviewComponent,UpcomingAppointmentsComponent,RouterModule
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent {

}
