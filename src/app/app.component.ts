import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ChildComponent } from './child/child.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  @ViewChild(ChildComponent)
  //  private childComp : ChildComponent;
   key : string;
   str : string;
   cvar :string = "orange";
   searchTerm: FormControl = new FormControl();

   myControl: FormControl = new FormControl();

   options1 = [
     'One',
     'Two',
     'Three'
    ];

  title = 'app';
  v : boolean=false;
  i : number;
  var :string="Hello";
  names : string[]=[];
  sarray : string[];
  options  = [
    {fname:"Rahul", lname:"Annae"},
    {fname:"Rahul", lname:"Aae"},
    {fname:"Rahul ", lname:" An "},
    {fname:"Rahul", lname:"A"},
    {fname:"", lname:""}
  ];

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 getNames(){
   this.v=true;
   console.log(this.v, this.options);
 }
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
plog(){
  console.log("click worked");
}
receive(name : string){
  console.log(name, "App Component log");
}
samFun(){
  console.log(this.names, this.options);
}

onBlur(btext : string){
  console.log( "name   Lost focus");
  // console.log(this.childComp.str);
}

}
 