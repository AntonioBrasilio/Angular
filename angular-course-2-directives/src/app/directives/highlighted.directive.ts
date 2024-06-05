import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "[highlighted]",
})
export class HighlightedDirective {
    constructor() {}

    @HostBinding("class.highlighted")
    get applyStyle() {
        return true;
    }

    @HostBinding("attr.disabled")
    get applyDisabled() {
        return true;
    }
}
