import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    CommonModule,
  ],
  providers: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['username', 'email', 'subject'];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {} // Inject UserService

  ngOnInit(): void {
    this.getUsers();
    this.isAdmin = this.authService.isAdmin();
    // this.isStudentOrTeacher = this.authService.isStudentOrTeacher();
    console.log('isAdmin:', this.isAdmin);
  }
  isAdmin: boolean = false;
  isStudentOrTeacher: boolean = false;

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.snackBar.open('Users fetched successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
      (error) => {
        console.error('Error fetching users', error);
        this.snackBar.open(
          'Failed to fetch users. Please try again.',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
      }
    );
  }
}
