import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
  constructor(private teacherService: TeacherService) {} // Inject UserService

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.teacherService.getUsers().subscribe(
      (data) => {
        this.teachers = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
  dataSource = new MatTableDataSource(this.teachers);
}
