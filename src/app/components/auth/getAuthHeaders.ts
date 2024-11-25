import { HttpHeaders } from '@angular/common/http';

export function getAuthHeaders(): HttpHeaders {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  let headers = new HttpHeaders();

  // Set the Authorization header, and assign it back to headers
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log('Token:', token);
  } else {
    console.log('No token found');
  }

  console.log('Headers:', headers);

  return headers;
}
