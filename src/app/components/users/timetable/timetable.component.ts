import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CLASSROOMS } from '../../../app.constants';
import { getAuthHeaders } from '../../auth/getAuthHeaders';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss',
})
export class TimetableComponent implements OnInit {
  timetable = [
    {
      day: 'MONDAY',
      timeSlot: 'AFTERNOON',
      subjectName: 'Science',
      teacher: null,
      classroom: 'A105',
      week: '3',
    },
    {
      day: 'MONDAY',
      timeSlot: 'EVENING',
      subjectName: 'Science2',
      teacher: null,
      classroom: 'A105',
      week: '3',
    },
    {
      day: 'MONDAY',
      timeSlot: 'MORNING',
      subjectName: 'Science3',
      teacher: null,
      classroom: 'A105',
      week: '3',
    },
  ];

  groupedTimetable: any[] = [];
  weeks: number[] = [1, 2, 3, 4]; // Example week numbers
  classrooms: string[] = CLASSROOMS;

  selectedWeek: number = 1; // Default week
  selectedClassroom: string = 'A105'; // Default classroom

  filteredTimetable: any[] = []; // Stores fetched timetable data

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.filteredTimetable = [];
    this.fetchTimetable();
  }

  /**
   * Fetch timetable data from the API based on selected week and classroom.
   */
  fetchTimetable(): void {
    let headers = getAuthHeaders();
    const url = `http://localhost:8080/api/timetables?weekNumber=${this.selectedWeek}&classroom=${this.selectedClassroom}`;
    this.http.get<any[]>(url, { headers }).subscribe(
      (data) => {
        this.timetable = data;
        this.groupTimetable();
      },
      (error) => {
        console.error('Error fetching timetable:', error);
        this.timetable = [];
      }
    );
  }

  /**
   * Group timetable data by day and time slots (morning, afternoon, evening).
   */
  groupTimetable(): void {
    const grouped: Record<
      string,
      { day: string; morning?: any; afternoon?: any; evening?: any }
    > = {};

    this.timetable.forEach((entry) => {
      if (!grouped[entry.day]) {
        grouped[entry.day] = {
          day: entry.day,
          morning: null,
          afternoon: null,
          evening: null,
        };
      }

      // Narrow down `timeSlot` to specific keys
      const timeSlot = entry.timeSlot.toLowerCase() as
        | 'morning'
        | 'afternoon'
        | 'evening';
      console.log('entry', entry);
      grouped[entry.day][timeSlot] = {
        timeSlot: entry.timeSlot,
        subjectName: entry.subjectName,
        teacherName: entry.teacher,
        classroom: entry.classroom,
      };
    });

    this.filteredTimetable = Object.values(grouped);
  }
  // Method to navigate to Timetable Create page when a row is clicked
  navigateToCreateTimetable(): void {
    // Optionally pass the selected day to the new component (via queryParams, state, or route params)
    this.router.navigate(['/timetable/create'], {
      queryParams: {
        week: this.selectedWeek,
        classroom: this.selectedClassroom,
      },
    });
  }
}
