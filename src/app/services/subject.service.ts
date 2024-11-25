import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuthHeaders } from '../components/auth/getAuthHeaders';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private apiUrl = 'http://localhost:8080/api/subjects'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<[]> {
    const headers = getAuthHeaders();
    return this.http.get<[]>(this.apiUrl, { headers });
  }

  createSubject(subject: any): Observable<any> {
    const headers = getAuthHeaders();
    return this.http.post<any>(this.apiUrl, subject, { headers });
  }
}
