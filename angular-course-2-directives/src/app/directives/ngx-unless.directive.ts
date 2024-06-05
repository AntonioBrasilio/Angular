import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: "[ngxUnless]",
})
export class NgxUnlessDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    visible = false;

    @Input()
    set ngxUnless(condition: boolean) {
        if (!condition && !this.visible) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.visible = true;
        } else if (condition) {
            this.viewContainerRef.clear();
            this.visible = false;
        }
    }
}
