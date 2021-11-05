import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
})
export class UserFormPage implements OnInit {
  userForm!: FormGroup;

  get userId() {
    return this.route.snapshot.params.id;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    const user = {
      name: this.userForm.get('name')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      role: 'user',
    };
    const request$: Observable<any> = !this.userId
      ? this.userService.create(user)
      : this.userService.update(this.userId, { ...user, id: this.userId });

    request$.subscribe(() => this.router.navigate(['/admin/user/list']));
  }

  cancel() {
    this.router.navigate(['/admin/user/list']);
  }

  private createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.userService.get(this.userId).subscribe((user) => {
      if (!user) {
        this.router.navigate(['/admin/user/list']);
        return;
      }

      this.userForm.patchValue({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    });
  }
}
