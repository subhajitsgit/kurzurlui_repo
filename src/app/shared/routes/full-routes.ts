import { Routes } from "@angular/router";

export const fullRoutes: Routes = [
  {
    path: 'error-page',
    loadChildren: () => import('../../pages/error-pages/error-pages.routes')
  },
  {
    path: 'authentication',
    loadChildren: () => import('../../pages/authentication/authentication.routes')
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('../../pages/coming-soon/coming-soon.routes')
  }
] 
