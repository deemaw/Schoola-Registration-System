import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080/api/teachers'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl);
  }

  findTeacherById(teacherId: string): Observable<Teacher> {
    return this.http.get<any>(`${this.apiUrl}/${teacherId}`);
  }
}
