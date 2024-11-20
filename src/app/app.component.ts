import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { log } from 'console';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    LoginComponent,
    CommonModule,
    MatSnackBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'school-management-app';
  public isLoggedIn: boolean = false; // Track login state
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/login']); // Redirect to userlist route
    this.isAdmin = this.authService.isAdmin();
    this.isStudentOrTeacher = this.authService.isStudentOrTeacher();
    console.log('isAdmin:', this.isAdmin);
  }

  onLoginSuccess() {
    this.isLoggedIn = true; // Set to true when login is successful
  }
}
