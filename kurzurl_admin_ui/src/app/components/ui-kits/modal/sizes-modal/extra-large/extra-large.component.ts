import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-extra-large',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './extra-large.component.html',
  styleUrls: ['./extra-large.component.scss']
})

export class ExtraLargeComponent {

  public modalData = Data.modalData;

  constructor(private modal: NgbModal) { }

  close() {
    this.modal.dismissAll();
  }

}
