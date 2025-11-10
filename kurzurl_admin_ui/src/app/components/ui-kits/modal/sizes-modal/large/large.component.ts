import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-large',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.scss']
})

export class LargeComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
