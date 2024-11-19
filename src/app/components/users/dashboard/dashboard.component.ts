import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'; // Corrected import
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public isLoggedIn: boolean = false; // Track login state
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isStudentOrTeacher = this.authService.isStudentOrTeacher();
    console.log('isAdmin:', this.isAdmin);
  }

  onLoginSuccess() {
    this.isLoggedIn = true; // Set to true when login is successful
  }
}
