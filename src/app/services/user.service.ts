import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { getAuthHeaders } from '../components/auth/getAuthHeaders';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    const headers = getAuthHeaders();
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  getUsers(): Observable<User[]> {
    const headers = getAuthHeaders();
    return this.http.get<User[]>(this.apiUrl, { headers });
  }

  getUserById(userId: string): Observable<User> {
    const headers = getAuthHeaders();
    return this.http.get<User>(`${this.apiUrl}/${userId}`, { headers });
  }
}
