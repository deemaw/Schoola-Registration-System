import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private apiUrl = 'http://localhost:8080/api/subjects'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl);
  }
}
