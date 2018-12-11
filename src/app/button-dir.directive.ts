import { Directive,ElementRef,Input,DoCheck } from '@angular/core';

@Directive({
  selector: '[appButtonDir]'
})
export class ButtonDirDirective {

@Input() appButtonDir: boolean;

ngDoCheck(){
  console.log(this.appButtonDir);

}
  constructor(private  el : ElementRef) { 
    el.nativeElement.disabled=this.appButtonDir;
    console.log(this.appButtonDir);
  }

}
