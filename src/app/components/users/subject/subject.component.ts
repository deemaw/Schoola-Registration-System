import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SubjectService } from '../../../services/subject.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [MatTableModule, RouterModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code']; // Columns to display in the table
  subjects = [
    { id: 1, name: 'Mathematics', code: 'MATH101' },
    { id: 2, name: 'Physics', code: 'PHYS101' },
    { id: 3, name: 'Chemistry', code: 'CHEM101' },
  ]; // Sample data; replace with data from your backend

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe((data) => {
      this.subjects = data;
    });
  }
}
