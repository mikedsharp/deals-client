import { Routes, RouterModule} from '@angular/router';
import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent, 
    canActivate: [AuthGuard]
  }, 
  {
    path: '**', 
    redirectTo: '/deals'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];