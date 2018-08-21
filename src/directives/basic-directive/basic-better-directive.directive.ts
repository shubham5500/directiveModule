import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBetterHighlighter]'
})

export class BetterHighlighter{

    @Input() defaultColor;
    @Input('appBetterHighlighter') hoverColor;



        
    ngOnInit(){
         this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',  this.defaultColor);
    }

    // @HostBinding('style') backgroundColor: string = 'transparent';


    @HostListener('mouseenter') onMouseEnter(){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
        this.renderer.addClass(this.elementRef.nativeElement, 'paraClass');
        // this.backgroundColor = this.hoverColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.renderer.removeClass(this.elementRef.nativeElement, 'paraClass')
        // this.backgroundColor = this.defaultColor;
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2){

    }

}