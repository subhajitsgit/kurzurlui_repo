import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonSvgIconComponent } from '../../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [CommonSvgIconComponent, RouterModule],
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})

export class ProfileModalComponent {

  constructor(private modal: NgbModal) { }

  close() {
    this.modal.dismissAll();
  }

}
