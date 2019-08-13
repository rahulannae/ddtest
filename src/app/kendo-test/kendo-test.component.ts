import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-test',
  templateUrl: './kendo-test.component.html',
  styleUrls: ['./kendo-test.component.css']
})
export class KendoTestComponent implements OnInit {

  value = 44;
  public colors: any[] = [{
    to: 25,
    color: '#0058e9'
  }, {
    from: 25,
    to: 50,
    color: '#37b400'
  }, {
    from: 50,
    to: 75,
    color: '#ffc000'
  }, {
    from: 75,
    color: '#f31700'
  }];
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.value = this.value + 10;
    if (this.value > 100) {
      this.value = 100;
    }
  }
  decrease() {
    this.value = this.value - 10;
    if (this.value < 0) {
      this.value = 0;
    }
  }

}
