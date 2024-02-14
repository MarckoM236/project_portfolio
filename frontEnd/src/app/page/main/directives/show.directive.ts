import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModal]',
})

//destroy and create component, reset function.
export class ShowDirective {
  @Input() appModal:boolean=false;
  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { 
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['appModal']){
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);  
      }
  }
}