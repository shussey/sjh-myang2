import { Component } from '@angular/core';
import { Course } from "./course";
import { CourseService } from './course.service'

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [CourseService]
})

export class CoursesComponent {
  coursetitle: string = 'Angular2';
  courses: Course[];


  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}