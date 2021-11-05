import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [SharedModule],
})
export class AuthModule {}
