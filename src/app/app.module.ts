import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/users/student/student.component';
import { TeacherComponent } from './components/users/teacher/teacher.component';
import { SubjectComponent } from './components/users/subject/subject.component';
import { TimetableComponent } from './components/users/timetable/timetable.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure router with routes
  ],
  providers: [],
  exports: [RouterModule],

  // providers: [provideHttpClient()], // add it here
  bootstrap: [],
})
export class AppModule {}
