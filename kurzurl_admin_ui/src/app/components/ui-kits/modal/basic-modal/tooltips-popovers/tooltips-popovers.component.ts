import { Component } from '@angular/core';
import { NgbModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-tooltips-popovers',
  standalone: true,
  imports: [FeatherIconsComponent,NgbPopoverModule],
  templateUrl: './tooltips-popovers.component.html',
  styleUrls: ['./tooltips-popovers.component.scss']
})

export class TooltipsPopoversComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
