import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { UserFormPage } from './pages/user-form/user-form.page';
import { UserListPage } from './pages/user-list/user-list.page';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserFormPage, UserListPage],
  imports: [SharedModule, UserRoutingModule],
  exports: [UserFormPage, UserListPage],
})
export class UserModule {}
