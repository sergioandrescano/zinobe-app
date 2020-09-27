import * as fromCredits from './credits.actions';

describe('loadCreditss', () => {
  it('should return an action', () => {
    expect(fromCredits.loadCreditss().type).toBe('[Credits] Load Creditss');
  });
});
