import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoaderModule } from './components/loader/loader.module';
import { AlertModule } from './components/alert/alert.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    LoaderModule,
    AlertModule
  ]
})
export class SharedModule { }
