import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/components/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/components/user-layout/user-layout.component';
import { LoginPage } from './modules/auth/pages/login/login.page';
import { AdminHomePage } from './modules/home/pages/admin-home/admin-home.page';
import { UserHomePage } from './modules/home/pages/user-home/user-home.page';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: AdminHomePage,
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/modules/user/user.module').then((module) => module.UserModule),
      },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: UserHomePage,
      },
      {
        path: 'login',
        component: LoginPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
