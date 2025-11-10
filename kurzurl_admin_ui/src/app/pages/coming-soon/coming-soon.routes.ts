import { Routes } from '@angular/router';
import { ComingSoonImageComponent } from './coming-soon-image/coming-soon-image.component';
import { ComingSoonSimpleComponent } from './coming-soon-simple/coming-soon-simple.component';
import { ComingSoonVideoComponent } from './coming-soon-video/coming-soon-video.component';

export default [
  {
    path: 'coming-simple',
    component: ComingSoonSimpleComponent
  },
  {
    path: 'coming-with-bg-video',
    component: ComingSoonVideoComponent
  },
  {
    path: 'coming-with-bg-image',
    component: ComingSoonImageComponent
  }
] as Routes;

