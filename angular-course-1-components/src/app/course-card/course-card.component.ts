import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, ContentChildren, TemplateRef } from "@angular/core";
import { Course } from "../model/course";

@Component({
    selector: "course-card",
    templateUrl: "./course-card.component.html",
    styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
    @Input({
        required: true,
    })
    data: Course;

    @Input()
    titleTemplate: TemplateRef<any>;

    @Output()
    customEvent = new EventEmitter<Course>();

    @ContentChild("indexParagraph")
    indexParagraph: ElementRef;

    @ContentChildren("paragraphs")
    paragraphs: ElementRef[];

    ngAfterViewInit() {
        console.log("Index paragraph: ", this.indexParagraph);
    }

    ngAfterContentInit() {
        console.log("Paragraphs: ", this.paragraphs);
    }

    onHandleClick() {
        console.log("Card was clicked");
        this.customEvent.emit(this.data);
    }
}
