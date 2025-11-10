import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonSvgIconComponent } from '../../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-balance-modal',
  standalone: true,
  imports: [CommonSvgIconComponent, FeatherIconsComponent,RouterModule],
  templateUrl: './balance-modal.component.html',
  styleUrls: ['./balance-modal.component.scss']
})

export class BalanceModalComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
