import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user =
      this.authService.user || localStorage.getItem('user') ? JSON.parse(<string>localStorage.getItem('user')) : null;
    if (!user || (state.url?.includes('admin') && user?.role !== 'admin')) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
