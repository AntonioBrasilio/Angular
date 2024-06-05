import { Directive, Host, HostBinding, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: "[highlighted]",
})
export class HighlightedDirective {
    constructor() {}

    isHighlighted = false;

    @Output()
    highlightedEvent = new EventEmitter();

    @HostBinding("class.highlighted")
    get applyStyle() {
        return this.isHighlighted;
    }

    @HostBinding("attr.disabled")
    get applyDisabled() {
        return true;
    }

    @HostListener("mouseover", ["$event"])
    onMouseOver($event) {
        console.log($event);
        this.isHighlighted = true;
        this.highlightedEvent.emit(this.isHighlighted);
    }

    @HostListener("mouseleave")
    onMouseLeave() {
        this.isHighlighted = false;
        this.highlightedEvent.emit(this.isHighlighted);
    }
}
