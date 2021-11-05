import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, TranslocoModule],
  exports: [
    TranslocoModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}
