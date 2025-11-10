import { Component } from '@angular/core';
import * as ChartData from "../../../shared/data/chart/general/apex-chart";
import * as ChartDataSocial from "../../../shared/data/chart/widgets/apex-chart";
import * as data from "../../../shared/data/data/widgets/general";
import { VisitorsComponent } from './visitors/visitors.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { CommonSocialMediaComponent } from './common-social-media/common-social-media.component';
import { CommonChartComponent } from '../../dashboard/ecommerce/common-chart/common-chart.component';
import { OpeningOfLeafletsComponent } from '../../dashboard/default/opening-of-leaflets/opening-of-leaflets.component';
import { CommonEducationDataComponent } from '../../dashboard/educations/common-education-data/common-education-data.component';
import { UpcomingAppointmentsComponent } from '../../dashboard/default/upcoming-appointments/upcoming-appointments.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [CommonSocialMediaComponent, VisitorsComponent, WebsiteDesignComponent, 
    CommonChartComponent, OpeningOfLeafletsComponent, 
    CommonEducationDataComponent, UpcomingAppointmentsComponent],
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  public totalSells = data.totalSells;
  public TotalSellsChart = ChartData.TotalSells;
  public dailyOrders = data.dailyOrders;
  public dailyOrdersChart = ChartData.dailyOrders;
  public ordersValue = data.ordersValue;
  public ordersValueChart = ChartData.ordersValue;
  public dailyRevenue = data.dailyRevenue;
  public dailyRevenueChart = ChartData.dailyRevenue;
  public FacebookChart = ChartDataSocial.FacebookChart;
  public InstagramChart = ChartDataSocial.InstagramChart;
  public TwitterChart = ChartDataSocial.TwitterChart;
  public YoutubeChart = ChartDataSocial.YoutubeChart;

}
