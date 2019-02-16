import { async, TestBed } from '@angular/core/testing';
import { NxsuiModule, nxsuiRoutes } from './';

describe('nxsuiRoutes (via index)', () => {
  it('should be an array', () => {
    expect(typeof nxsuiRoutes).toEqual('object');
  });
  it('should contain expected amount of items', () => {
    expect(nxsuiRoutes.length).toEqual(0);
  });
});

describe('NxsuiModule (via index)', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NxsuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NxsuiModule).toBeDefined();
  });
});
