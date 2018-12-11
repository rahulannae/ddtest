import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFdir]'
})
export class FdirDirective {
  
  @Input() appFdir: string;
  constructor(private el : ElementRef) 
  {
    el.nativeElement.style.color="lightblue";
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appFdir);
    this.el.nativeElement.style.cursor = 'wait';
    console.log(this.appFdir);

  }
  changeFunc(){
    this.el.nativeElement.style.backgroundColor="orange";
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("red");
    this.el.nativeElement.style.cursor = 'wait';

  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    console.log("highlight func called");
  }
}
