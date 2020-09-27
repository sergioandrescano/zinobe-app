import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    SharedModule
  ]
})
export class CreditsModule { }
