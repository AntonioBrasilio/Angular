import { Component } from "@angular/core";
import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses: any = COURSES;

  onCustomEvent(event) {
    console.log("Custom event", event);
  }
}
