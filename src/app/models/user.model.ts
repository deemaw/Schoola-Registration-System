// src/app/models/user.model.ts
export interface User {
  token(token: any): unknown;
  id?: number;
  username: string;
  password: string;
  email: string;
  roles: []; // Array of roles (e.g., admin, teacher, student)
  type: 'admin' | 'teacher' | 'student'; // Based on your backend polymorphism
}
