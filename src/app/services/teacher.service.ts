import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';
import { getAuthHeaders } from '../components/auth/getAuthHeaders';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080/api/teachers'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<[]> {
    const headers = getAuthHeaders();
    return this.http.get<[]>(this.apiUrl, { headers });
  }

  findTeacherById(teacherId: string): Observable<Teacher> {
    const headers = getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/${teacherId}`, { headers });
  }
}
