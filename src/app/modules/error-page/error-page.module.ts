import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageRootComponent } from './error-page-root.component';

import { ErrorPageComponent } from '../../components/error-page/error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, ErrorPageRoutingModule],
})
export class ErrorPageModule {}
