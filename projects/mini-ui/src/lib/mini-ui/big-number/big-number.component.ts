import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'big-number',
  templateUrl: 'big-number.component.html',
  styleUrls: ['big-number.component.css'],
})
export class BigNumberComponent implements AfterViewInit {
  @Input() number: number = 0;
  @Input() label: string = '';
  @Input() size_number: number = 0;
  @Input() size_label: number = 0;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() label_color: string = '';
  @Input() number_color: string = '';

  ngAfterViewInit() {}
}
