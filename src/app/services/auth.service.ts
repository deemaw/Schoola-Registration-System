import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;

    // Here, we assume the role is saved in localStorage or retrieved from a JWT token.
    this.userRole = localStorage?.getItem('userRole') || 'guest'; // 'guest' is a fallback if no role is set
  }

  getRole(): string {
    return this.userRole;
  }

  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role); // Save the role in localStorage or manage in any other way
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isStudentOrTeacher(): boolean {
    return this.userRole === 'student' || this.userRole === 'teacher';
  }
}
