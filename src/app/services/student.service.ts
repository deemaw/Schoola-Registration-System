import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuthHeaders } from '../components/auth/getAuthHeaders';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<[]> {
    const headers = getAuthHeaders();
    return this.http.get<[]>(this.apiUrl, { headers });
  }
}
