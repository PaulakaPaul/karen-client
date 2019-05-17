import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtPayload } from '../models/jwt-payload.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    public jwtHelper: JwtHelperService) { }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  isAdmin(): boolean {
    const payload = this.jwtHelper.decodeToken() as JwtPayload;
    return this.isLoggedIn() && payload.role === 'admin';
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['login']);
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.redirectToLogin();
  }

  redirectToLogin(): void {
    this.router.navigate(['login']);
  }

  redirectToMap(): void {
    this.router.navigate(['map']);
  }
}
