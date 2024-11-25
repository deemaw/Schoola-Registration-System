import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SubjectService } from '../../../services/subject.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subject-subject',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateSubjectComponent implements OnInit {
  subjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private snackBar: MatSnackBar
  ) {
    this.subjectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.subjectForm.valid) {
      console.log('Subject Created:', this.subjectForm.value);
      this.subjectService
        .createSubject(this.subjectForm.value)
        .subscribe((response) => {
          this.snackBar.open('Subject created successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        });
      this.subjectForm.reset();
    } else {
      this.snackBar.open('Please fill in all required fields.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
}
