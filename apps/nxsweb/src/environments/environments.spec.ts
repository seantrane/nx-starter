import { environment as env } from './environment';
import { environment as envProd } from './environment.prod';

describe('default environment config', () => {
  it('should have production property that is false', () => {
    expect(env.production).toBeFalsy();
  });
});

describe('production environment config', () => {
  it('should have production property that is true', () => {
    expect(envProd.production).toBeTruthy();
  });
});
