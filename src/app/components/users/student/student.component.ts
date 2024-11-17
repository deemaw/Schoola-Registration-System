import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  standalone: true,
  imports: [CommonModule, MatTableModule], // Import CommonModule to use *ngFor and other directives
})
export class StudentComponent {
  displayedColumns: string[] = ['name', 'age', 'grade']; // Define column order

  students = [
    { id: 1, name: 'Alice', age: 15, grade: '10th' },
    { id: 2, name: 'Bob', age: 16, grade: '11th' },
    { id: 3, name: 'Charlie', age: 14, grade: '9th' },
  ];
}
