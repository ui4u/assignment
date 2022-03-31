import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private username = new Subject<string>();
  public username$ = this.username.asObservable();

  emitdata(x: any) {
    this.username.next(x);
  }
  registerUser(userDetails: any) {
    return this.http.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d', userDetails)
  }

}
