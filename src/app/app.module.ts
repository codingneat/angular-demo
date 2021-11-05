import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslocoRootModule } from './core/transloco-root.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslocoRootModule, CoreModule, AppRoutingModule, LayoutModule, HomeModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
