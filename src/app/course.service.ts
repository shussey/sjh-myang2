// import { Injectable } from '@angular/core';
import { Course } from './course';


// @Injectable()
export class CourseService {
    getCourses() : Course[] {
        return [
            {coursename: 'Math', courseauthor: "Me",courseyear: 1996},
            {coursename: 'English', courseauthor: "You",courseyear: 2001},
            {coursename: 'Chemistry', courseauthor: "Them",courseyear: 1901},
            {coursename: 'Physics', courseauthor: "They",courseyear: 2016},
            {coursename: 'Biology', courseauthor: "Thou",courseyear: 1984},
        ]
}
}
