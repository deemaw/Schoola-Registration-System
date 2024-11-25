import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {
    const localStorage = document.defaultView?.localStorage;

    // Here, we assume the role is saved in localStorage or retrieved from a JWT token.
    this.userRole = localStorage?.getItem('userRole') || 'guest'; // 'guest' is a fallback if no role is set
  }
  private apiUrl = 'http://localhost:8080/auth'; // Replace with your API URL

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((user: any) => {
          // Assuming the token is part of the response, e.g., user.token
          localStorage.setItem('token', user.token);
        })
      );
  }

  getRole(): string {
    return this.userRole;
  }

  setToken(token: any): void {
    localStorage.setItem('token', token);
  }

  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role); // Save the role in localStorage or manage in any other way
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isStudent(): boolean {
    return this.userRole === 'student';
  }

  isTeacher(): boolean {
    return this.userRole === 'teacher';
  }
}
