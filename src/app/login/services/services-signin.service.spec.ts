import { TestBed } from '@angular/core/testing';

import { ServicesSigninService } from './services-signin.service';

describe('ServicesSigninService', () => {
  let service: ServicesSigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesSigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
