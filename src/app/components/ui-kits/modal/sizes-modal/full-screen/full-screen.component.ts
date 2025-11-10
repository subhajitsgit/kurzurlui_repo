import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-full-screen',
  standalone:true,
  imports:[FeatherIconsComponent],
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})

export class FullScreenComponent {

  public modalData = Data.modalData;
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
