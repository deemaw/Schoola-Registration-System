import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class TeacherComponent {
  teachers = [
    { id: 1, name: 'Mr. Smith', subject: 'Mathematics' },
    { id: 2, name: 'Ms. Johnson', subject: 'Science' },
  ];
}
