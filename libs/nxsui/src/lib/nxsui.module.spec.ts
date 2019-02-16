import { async, TestBed } from '@angular/core/testing';
import { NxsuiModule, nxsuiRoutes } from './nxsui.module';

describe('nxsuiRoutes', () => {
  it('should be an array', () => {
    expect(typeof nxsuiRoutes).toEqual('object');
  });
  it('should contain expected amount of items', () => {
    expect(nxsuiRoutes.length).toEqual(0);
  });
});

describe('NxsuiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NxsuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NxsuiModule).toBeDefined();
  });
});
