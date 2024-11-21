import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isLoggedIn = false;
  public isAdmin = false;
  public isStudent = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isStudent = this.authService.isStudent();
    console.log('isAdmin:', this.isAdmin);
  }

  onLoginSuccess(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isStudent = false;
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']); // Redirect to login route
  }
}
