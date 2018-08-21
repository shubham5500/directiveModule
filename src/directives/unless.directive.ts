import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }
  
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.viewRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewRef.clear();
    }
  }


}
