import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  standalone: true,
  imports: [CommonModule, MatTableModule],
})
export class StudentComponent {
  displayedColumns: string[] = ['name', 'age', 'grade']; // Define column order

  students = [
    { id: 1, name: 'Alice', age: 15, grade: '10th' },
    { id: 2, name: 'Bob', age: 16, grade: '11th' },
    { id: 3, name: 'Charlie', age: 14, grade: '9th' },
  ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.studentService.getUsers().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
