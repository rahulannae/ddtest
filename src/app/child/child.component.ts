import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Name } from '../name';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  

nm : string;
  @Input() opt : Name;
  @Input()
  set name(name : string){
      this.nm = (name && name.trim()) || '<no name set>';

  }
//  get name(): string { return this.nm; }

@Output() onRecv = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  public str="Rahul is a hero";
receive(){
  this.onRecv.emit("child content");
  console.log('Rahul in child ');
}
}
