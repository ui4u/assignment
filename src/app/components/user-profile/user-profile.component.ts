import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService) { }
  userDetails: any;
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('currentUser') || "{}");
    this.userService.emitdata(this.userDetails.name);
  }

}
