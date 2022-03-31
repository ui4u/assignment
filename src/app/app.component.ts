import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-user-registration-assignment';
  username = 'Guest'
  constructor(private userService: UserService) {
    this.userService.username$.subscribe(
      (data) => {
        this.username = data;
      }
    );
  }

}
