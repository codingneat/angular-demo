import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, FooterComponent],
  imports: [SharedModule],
})
export class LayoutModule {}
