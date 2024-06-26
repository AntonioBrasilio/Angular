import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Injector,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CourseTitleComponent } from "../course-title/course-title.component";
import { createCustomElement } from "@angular/elements";

@Component({
    selector: "course-card",
    templateUrl: "./course-card.component.html",
    styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output("courseChanged")
    courseEmitter = new EventEmitter<Course>();

    constructor() {}

    ngOnInit() {
    }

    onSaveClicked(description: string) {
        this.courseEmitter.emit({ ...this.course, description });
    }
}
