import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {

  public isDisable: boolean = false;
  public isDisable1: boolean = false;

  close() {
    this.isDisable = true;
  }

  close1() {
    this.isDisable1 = true;
  }

}
