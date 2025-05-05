import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './label.component.html',
})
export class LabelComponent implements OnInit {
  @Input() classname = '';
  @Input() title = '';
  constructor() {}

  ngOnInit() {}
}
