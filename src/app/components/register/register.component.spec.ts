import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [RegisterComponent],
      providers: [AuthenticationService, UserService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test getErrorEmail method', () => {
    const res = component.getErrorEmail();
    expect(res).toBeDefined();
  });
  it('should test getErrorPassword method', () => {
    const res = component.getErrorPassword();
    expect(res).toBeDefined();
  });
  it('should test onSubmit method', () => {
    const res = component.onSubmit({});
    expect(res).toBeUndefined();
  });
});
