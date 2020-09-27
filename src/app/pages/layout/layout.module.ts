import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './container/layout.component';
import { BankComponent } from './components/bank/bank.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './store/layout.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './store/layout.reducer';


@NgModule({
  declarations: [LayoutComponent, BankComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    EffectsModule.forFeature([LayoutEffects]),
    StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer)
  ]
})
export class LayoutModule { }
