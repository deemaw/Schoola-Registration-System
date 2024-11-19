import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-timetable-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './timetable-create.component.html',
  styleUrl: './timetable-create.component.scss',
})
export class TimetableCreateComponent implements OnInit {
  timetableForm!: FormGroup;
  teachers = [
    { id: 1, username: 'Mr. Smith' },
    { id: 2, username: 'Ms. Johnson' },
    { id: 3, username: 'Mr. Lee' },
    { id: 4, username: 'Ms. Williams' },
  ];
  subjects = [
    { id: 1, name: 'Science' },
    { id: 2, name: 'Math' },
    { id: 3, name: 'History' },
    { id: 4, name: 'English' },
  ];
  classRooms = ['A101', 'A102', 'A103', 'A104', 'A105', 'B202', 'C303'];
  weeks = Array.from({ length: 52 }, (_, i) => i + 1); // Array from 1 to 52

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.timetableForm = this.fb.group({
      day: ['MONDAY', Validators.required],
      timeSlot: ['MORNING', Validators.required],
      classRoom: ['A101', Validators.required],
      teacher: [1, Validators.required], // Default to Mr. Smith
      subject: [1, Validators.required], // Default to Science
      week: [3, [Validators.required, Validators.min(1), Validators.max(52)]],
    });

    this.getTeachersList();
  }

  getTeachersList() {
    this.teacherService.getUsers().subscribe((data) => {
      this.teachers = data;
    });
    return this.teachers;
  }
  onSubmit(): void {
    if (this.timetableForm?.valid) {
      const formData = {
        day: this.timetableForm.value.day,
        timeSlot: this.timetableForm.value.timeSlot,
        classRoom: this.timetableForm.value.classRoom,
        teacher: {
          type: 'teacher',
          id: this.timetableForm.value.teacher,
          name: this.teachers.find(
            (t) => t.id === this.timetableForm?.value.teacher
          )?.username,
        },
        subject: {
          id: this.timetableForm.value.subject,
          name: this.subjects.find(
            (s) => s.id === this.timetableForm?.value.subject
          )?.name,
        },
        week: this.timetableForm.value.week,
      };

      this.submitTimetable(formData).subscribe((response: any) => {
        console.log('Timetable submitted successfully!', response);
      });
    }
  }

  submitTimetable(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer YOUR_TOKEN_HERE',
      'Content-Type': 'application/json',
    });

    return this.http.post('http://localhost:8080/api/timetables', data, {
      headers,
    });
  }
}
