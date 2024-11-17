import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'school-management-app';
  public isLoggedIn: boolean = false; // Track login state
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isStudentOrTeacher = this.authService.isStudentOrTeacher();
  }

  onLoginSuccess() {
    this.isLoggedIn = true; // Set to true when login is successful
  }
}
