import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@app/models';
import { environment as env } from '@app/../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${env.apiUrl}/users`;
  private _user: User | null = null;

  get user(): User | null {
    return this._user;
  }

  set user(user: User | null) {
    localStorage.setItem('user', !!user ? JSON.stringify(user) : '');
    this._user = user;
  }

  constructor(private http: HttpClient) {}

  findUser(email: string, password: string): Observable<User | null> {
    return this.http
      .get<any>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(map((users) => (users.length > 0 ? users[0] : null)));
  }
}
