import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})

export class SimpleComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
