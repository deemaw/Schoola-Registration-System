import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  username: string = '';
  password: string = '';

  handleLogin(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Assuming you have authentication logic here
    this.authService.setRole('admin');
    // Add logic to handle successful authentication (e.g., check response from API)
    // After successful login, redirect to user list page
    this.router.navigate(['/users']); // Redirect to userlist route
  }
}
