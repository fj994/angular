import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseHover(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = "blue";
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = "transparent";
  }

}
