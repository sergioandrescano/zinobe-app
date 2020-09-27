import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
