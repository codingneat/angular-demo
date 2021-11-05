import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@app/models';
import { environment as env } from '@app/../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = `${env.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<User> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(user: User) {
    return this.http.post<any>(this.baseUrl, user);
  }

  update(id: string, user: User): Observable<User> {
    return this.http.put<any>(this.baseUrl + '/' + id, user);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
