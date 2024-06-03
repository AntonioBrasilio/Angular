import { Component, Input, Output, EventEmitter } from "@angular/core";
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

  @Output()
  customEvent = new EventEmitter<Course>();

  onHandleClick() {
    console.log("Card was clicked");
    this.customEvent.emit(this.data);
  }
}
