import { Component, Input } from '@angular/core';
import * as data  from '../../../../../shared/data/data/ui-kits/ui-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-fullscreen-common-modal',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './fullscreen-common-modal.component.html',
  styleUrls: ['./fullscreen-common-modal.component.scss']
})

export class FullscreenCommonModalComponent {

  @Input() title : string;
  public commonFullScreenData = data.commonFullScreenSizeData;
  constructor(private modal : NgbModal){}

  close(){
    this.modal.dismissAll();
  }

}
