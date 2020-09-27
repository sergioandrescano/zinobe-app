import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from 'src/app/shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './container/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/login.reducer';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer)
  ]
})
export class LoginModule { }
