import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from "src/configuration/config";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [
        {
            provide: CONFIG_TOKEN,
            useFactory: () => APP_CONFIG,
        },
    ],
})
export class AppComponent implements OnInit {
    courses$ = new Observable<Course[]>();

    constructor(private coursesService: CoursesService, @Inject(CONFIG_TOKEN) private appConfig: AppConfig) {}

    ngOnInit() {
        this.courses$ = this.coursesService.loadCourses();
    }

    save(event: Course) {
        this.coursesService.saveCourse(event).subscribe((res) => {
            console.log("Course saved!");
        });
    }
}
