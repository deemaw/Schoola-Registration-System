import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user',
  standalone: true, // Standalone component
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserCreateComponent implements OnInit {
  createUserForm!: FormGroup;
  private fb = inject(FormBuilder); // Inject FormBuilder
  private userService = inject(UserService); // Inject UserService
  subjects = [
    { id: 1, name: 'Science' },
    { id: 2, name: 'Math' },
    { id: 3, name: 'History' },
    { id: 4, name: 'English' },
  ];

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      roles: ['', [Validators.required]],
      type: ['', [Validators.required]], // 'admin', 'teacher', 'student
      subjectSpecialization: [''],
      subjects: [[]],
    });
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      const user: User = this.createUserForm.value;

      this.userService.createUser(user).subscribe(
        (response) => {
          console.log('User created:', response);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    } else {
      this.createUserForm.markAllAsTouched(); // Highlight invalid fields
    }
  }
}
