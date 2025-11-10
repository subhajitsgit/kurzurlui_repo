import { Component } from '@angular/core';
import { ColorsSchemesComponent } from './colors-schemes/colors-schemes.component';
import { DefaultToastComponent } from './default-toast/default-toast.component';
import { LiveToastComponent } from './live-toast/live-toast.component';
import { StackingToastsComponent } from './stacking-toasts/stacking-toasts.component';
import { TranslucentToastsComponent } from './translucent-toasts/translucent-toasts.component';
import { UniqueToastComponent } from './unique-toast/unique-toast.component';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [ColorsSchemesComponent,DefaultToastComponent,LiveToastComponent,StackingToastsComponent,TranslucentToastsComponent,UniqueToastComponent],
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})

export class ToastsComponent {

}
