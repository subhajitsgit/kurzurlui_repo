import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-scrolling-content',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './scrolling-content.component.html',
  styleUrls: ['./scrolling-content.component.scss']
})

export class ScrollingContentComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
