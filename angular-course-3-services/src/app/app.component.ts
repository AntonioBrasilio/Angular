import { AfterViewInit, Component, ElementRef, Inject, Injector, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from "src/configuration/config";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./course-title/course-title.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    courses$ = new Observable<Course[]>();

    coursesTotal = COURSES.length;

    constructor(private coursesService: CoursesService, @Inject(CONFIG_TOKEN) private appConfig: AppConfig, private injector: Injector) {}

    ngOnInit() {
        this.courses$ = this.coursesService.loadCourses();
        console.log("App config", this.appConfig);

        const htmlCustomElement = createCustomElement(CourseTitleComponent, { injector: this.injector });
        customElements.define("course-title", htmlCustomElement);
    }

    save(event: Course) {
        this.coursesService.saveCourse(event).subscribe((res) => {
            console.log("Course saved!");
        });
    }
}
