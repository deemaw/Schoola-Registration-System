import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  username: string = '';
  password: string = '';

  handleLogin(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.userService.login(this.username, this.password).subscribe({
      next: (response) => {
        response.roles.forEach((role: string) => {
          if (role === 'ADMIN') {
            this.authService.setRole('admin');
          } else if (role === 'teacher') {
            this.authService.setRole('teacher');
          } else {
            this.authService.setRole('student');
          }
        });

        // Assuming login response is successful
        this.router.navigate(['/users']); // Redirect to userlist route
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
    // Assuming you have authentication logic here
    // Add logic to handle successful authentication (e.g., check response from API)
    // After successful login, redirect to user list page
  }
}
