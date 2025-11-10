import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-small',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})

export class SmallComponent {

  public smallModalData = Data.smallModalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll()
  }

}
