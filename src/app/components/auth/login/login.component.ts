import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  username: string = '';
  password: string = '';

  handleLogin(): void {
    this.userService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Redirect to user list route
        this.router.navigate(['/users']);

        response.roles.forEach((role: string) => {
          if (role === 'ADMIN') {
            this.authService.setRole('admin');
          } else if (role === 'teacher') {
            this.authService.setRole('teacher');
          } else {
            this.authService.setRole('student');
          }
        });

        // Show success snack bar
        this.snackBar.open('Login successful!', 'Close', {
          duration: 3000, // milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        console.error('Login failed:', err);

        // Show error snack bar
        this.snackBar.open('Login failed. Please try again.', 'Close', {
          duration: 3000, // milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }
}
