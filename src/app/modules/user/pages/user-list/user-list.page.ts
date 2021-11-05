import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '@app/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
})
export class UserListPage implements OnInit {
  users$!: Observable<User[]>;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  trackById(index: number, user: User) {
    return user.id;
  }

  goToEdit(id: string | undefined) {
    this.router.navigate([`/admin/user`, { id }]);
  }

  deleteUser(id: string | undefined) {
    this.userService.delete(id || '').subscribe(() => this.getUsers());
  }

  private getUsers() {
    this.users$ = this.userService.getAll();
  }
}
