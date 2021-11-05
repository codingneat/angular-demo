import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { AdminHomePage } from './pages/admin-home/admin-home.page';
import { UserHomePage } from './pages/user-home/user-home.page';

@NgModule({
  declarations: [AdminHomePage, UserHomePage],
  imports: [SharedModule],
})
export class HomeModule {}
