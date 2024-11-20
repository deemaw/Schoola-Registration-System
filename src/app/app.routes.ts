import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/users/student/student.component';
import { TeacherComponent } from './components/users/teacher/teacher.component';
import { SubjectComponent } from './components/users/subject/subject.component';
import { TimetableComponent } from './components/users/timetable/timetable.component';
import { NgModule } from '@angular/core';
import { UserCreateComponent } from './components/users/user-create/user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { TimetableCreateComponent } from './components/users/timetable-create/timetable-create.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'users', component: UserListComponent },
  { path: 'timetable/create', component: TimetableCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
