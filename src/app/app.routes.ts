import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { fullRoutes } from './shared/routes/full-routes';
import { content } from './shared/routes/routes';
import { LinksComponent } from './components/links/links.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'auth/login',
        component: LoginComponent,  
      },
      {
        path: 'auth/register',
        component: RegisterComponent,  
      },
      {
        path: '',
        component: ContentComponent,
        children: content,
        canActivate: [AdminGuard], 
      },
      {
        path: '',
        component: FullComponent,
        children : fullRoutes,
        canActivate: [AdminGuard], 
      },
      {
        path: '**',
        redirectTo : 'error-page/error-400',
        pathMatch: 'full'
      }
];
