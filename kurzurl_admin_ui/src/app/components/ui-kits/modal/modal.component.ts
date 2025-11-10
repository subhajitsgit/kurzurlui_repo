import { Component } from '@angular/core';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { BetweenModalsComponent } from './between-modals/between-modals.component';
import { CenteredModalComponent } from './centered-modal/centered-modal.component';
import { FullscreenCommonModalComponent } from './fullscreen-modal/fullscreen-common-modal/fullscreen-common-modal.component';
import { FullscreenModalComponent } from './fullscreen-modal/fullscreen-modal.component';
import { MofiCustomModalsComponent } from './mofi-custom-modals/mofi-custom-modals.component';
import { SizesModalComponent } from './sizes-modal/sizes-modal.component';
import { StaticBackdropComponent } from './static-backdrop/static-backdrop.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BasicModalComponent,BetweenModalsComponent,CenteredModalComponent,
    FullscreenCommonModalComponent,MofiCustomModalsComponent,
    SizesModalComponent,StaticBackdropComponent,FullscreenModalComponent
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

}
