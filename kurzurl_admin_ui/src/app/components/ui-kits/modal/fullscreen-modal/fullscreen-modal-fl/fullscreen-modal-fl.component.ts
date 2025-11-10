import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/ui-kits/ui-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';


@Component({
  selector: 'app-fullscreen-modal-fl',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './fullscreen-modal-fl.component.html',
  styleUrls: ['./fullscreen-modal-fl.component.scss']
})

export class FullscreenModalFlComponent {

  public commonFullScreenData = data.commonFullScreenData;

  constructor(private modal: NgbModal) { }

  close() {
    this.modal.dismissAll();
  }

}
