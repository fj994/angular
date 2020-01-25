import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templatateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templatateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
