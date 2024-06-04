import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    courses: any = COURSES;

    @ViewChild(CourseCardComponent) card: CourseCardComponent;
    @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
    @ViewChild("h2Ref") h2Ref: ElementRef;

    ngAfterViewInit(): void {
        this.cards.changes.subscribe((cards) => {
            console.log(cards);
        });
    }

    onCustomEvent(event) {
        console.log("Custom event", event);
        console.log("ViewChild Card", this.card);
        console.log("ViewChild H2", this.h2Ref);
        console.log("ViewChildren Cards", this.cards);
    }

    onAddNewCourse() {
        this.courses.push({
            id: 5,
            title: "New Course",
            description: "New Description",
            iconUrl: "https://via.placeholder.com/150",
            courseListIcon: "https://via.placeholder.com/50",
            longDescription: "New Long Description",
            category: "new",
            lessonsCount: 10,
        });
    }
}
