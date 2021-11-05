import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/core/guards';
import { UserFormPage } from './pages/user-form/user-form.page';
import { UserListPage } from './pages/user-list/user-list.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: UserFormPage,
  },
  {
    path: 'list',
    canActivate: [AuthGuard],
    component: UserListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
