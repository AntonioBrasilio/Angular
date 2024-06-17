import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    login(form: NgForm, event: Event) {
        console.log(form.value);
        console.log(event);
    }
}
