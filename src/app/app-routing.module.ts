import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mahabbat',
    pathMatch: 'full'
  },

  {
    path: 'mahabbat',
    component: ContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule)
      }
    ]
  },
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
