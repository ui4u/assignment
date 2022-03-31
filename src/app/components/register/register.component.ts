import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  titleAlert: string = 'This field is required';
  formGroup: FormGroup = this.formBuilder.group({
    'email': [null, [Validators.required, Validators.pattern(this.emailregex)]],
    'username': [null, Validators.required],
    'password': [null, [Validators.required, this.checkPassword]],
    'bio': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
  });;
  userData: any = '';
  showSpinner = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
    private authenticationservice: AuthenticationService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.userService.emitdata('Guest');
  }

  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required') ? 'Field is required' :
      this.formGroup.get('email')?.hasError('pattern') ? 'Not a valid email address' : '';

  }

  getErrorPassword() {
    if (this.formGroup.get('password')?.hasError('required')) {
      return 'Field is required (at least eight characters, one uppercase letter and one number)';
    }
    else if (this.formGroup.get('password')?.hasError('requirements')) {
      return 'Password needs to be at least eight characters, one uppercase letter and one number';
    }
    else {
      return '';
    }

  }

  onSubmit(post: any) {
    this.showSpinner = true;
    this.userData = post;
    this.userService.registerUser(this.userData).subscribe(res => {
      this.authenticationservice.fetchUserData().subscribe(userDataRes => {
        localStorage.setItem('currentUser', JSON.stringify(userDataRes));
        this.authenticationservice.currentUserSubject.next(userDataRes);
        this.showSpinner = false;
        this.router.navigate(['/profile']);
      })

    })
  }

}
