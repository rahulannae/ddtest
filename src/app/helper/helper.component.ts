import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
  foo = {
    "general": {
      "name": "sdfdf",
      "group": ["sd", "sdad", "asdasdasd"]
    }
  };
  thisWorks = 'WORKS?';

  constructor() { }

  ngOnInit() {
  }
  addFieldGroup(event) {
    this.foo.general.group.push('boquet');
    console.log(this.foo);
  }
  deleteFieldGroup(event) {
    this.foo.general.group.pop();
    console.log(this.foo);
  }
  indexTracker(index: number, value: any) {
    return index;
  }
  onINPUT(item, index) {
    this.array[index] = item;
  }
  get array() {
    return this.foo.general.group;
  }

}
