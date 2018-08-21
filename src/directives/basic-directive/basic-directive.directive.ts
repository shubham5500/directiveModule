import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appBasicHighlightDirective]'
})

export class BasicHighlightDirective {
    constructor(private elementRef: ElementRef){

    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';       
    }
}