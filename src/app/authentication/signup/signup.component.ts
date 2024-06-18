import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FeatherModule,
        RouterLink,
    ],
})
export class SignupComponent implements OnInit {
  registerForm!: UntypedFormGroup;
  submitted = false;
  error = '';
  constructor(private formBuilder: UntypedFormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      termcondition: [false, [Validators.requiredTrue]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.registerForm.invalid) {
      this.error = 'Invalid data !';
      return;
    } else {
      // register user call here..
    }
  }
}
