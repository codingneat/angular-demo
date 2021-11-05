import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    this.authService
      .findUser(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
      .subscribe((user) => {
        this.authService.user = user;
        this.clearForm();

        if (!!user) {
          this.router.navigate([user?.role === 'admin' ? '/admin' : '']);
        }
      });
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private clearForm() {
    this.loginForm.reset();
  }
}
