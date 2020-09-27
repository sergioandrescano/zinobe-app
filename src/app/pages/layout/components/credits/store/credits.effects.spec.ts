import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CreditsEffects } from './credits.effects';

describe('CreditsEffects', () => {
  let actions$: Observable<any>;
  let effects: CreditsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreditsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CreditsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
