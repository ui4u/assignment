import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let mockUserData = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(service.currentUserValue).toEqual({});
  });
  it('should test fetchUserData method', () => {
    service.fetchUserData().subscribe(res => {
      expect(res).toEqual(mockUserData);
    })
  });
});
