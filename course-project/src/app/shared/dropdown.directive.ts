import { Directive, ElementRef, Renderer2, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
  
  
  // @Input() set appDropdown(condition: boolean) {
  //   if(condition) {
  //     this.renderer.addClass(this.elementRef.nativeElement, "open");
  //   } else {
  //     this.renderer.removeClass(this.elementRef.nativeElement, "open");
  //   }
  // }

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
}
