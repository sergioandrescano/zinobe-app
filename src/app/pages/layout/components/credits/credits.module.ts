import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './container/credits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CreditsEffects } from './store/credits.effects';
import { StoreModule } from '@ngrx/store';
import * as fromCredits from './store/credits.reducer';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [CreditsComponent, ListComponent],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CreditsEffects]),
    StoreModule.forFeature(fromCredits.creditsFeatureKey, fromCredits.reducer)
  ]
})
export class CreditsModule { }
