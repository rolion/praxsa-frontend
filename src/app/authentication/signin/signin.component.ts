import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { AuthService } from '@core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FeatherModule,
    RouterLink,
  ],
})
export class SigninComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  error = '';
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['admin@email.com', Validators.required],
      password: ['admin@123', Validators.required],
      remember: [''],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.authService
        .login(this.f['username'].value, this.f['password'].value)
        .subscribe({
          next: (res) => {
            if (res) {
              if (res) {
                const token = this.authService.currentUserValue.token;
                if (token) {
                  this.router.navigate(['/dashboard/main']);
                }
              } else {
                this.error = 'Invalid Login';
              }
            } else {
              this.error = 'Invalid Login';
            }
          },
          error: (error) => {
            this.error = error;
            this.submitted = false;
          },
        });
    }
  }
}
