import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'division',
  templateUrl: './division.component.html',
})
export class DivisionComponent implements OnInit {
 @Input() classname = '';
  constructor() { }

  ngOnInit() {
  }

}
