import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss',
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class TeacherComponent implements OnInit {
  // teachers = [
  //   { id: 1, name: 'Mr. Smith', subject: 'Mathematics' },
  //   { id: 2, name: 'Ms. Johnson', subject: 'Science' },
  // ];

  teachers: any[] = [];
  displayedColumns: string[] = ['username', 'subjectSpecialization'];

  constructor(
    private teacherService: TeacherService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.teacherService.getUsers().subscribe(
      (data) => {
        this.teachers = data;
        this.snackBar.open('Users fetched successful!', 'Close', {
          duration: 3000, // milliseconds
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
            duration: 3000, // milliseconds
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
      }
    );
  }
  dataSource = new MatTableDataSource(this.teachers);
}
